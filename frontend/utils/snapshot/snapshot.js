import snapshot from "@snapshot-labs/snapshot.js";
import Moralis from "moralis";
import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import { getAddress } from "@ethersproject/address";

export async function createProposal() {
  const hub = "https://hub.snapshot.org"; // or https://testnet.snapshot.org for testnet
  const client = new snapshot.Client712(hub);
  //const web3 = await Moralis.enableWeb3();

  const web3Modal = new Web3Modal({
    network: "rinkeby",
    cacheProvider: false,
  });

  const web3 = new Web3Provider(window.ethereum);
  web3Modal.clearCachedProvider();
  const provider_ = await web3Modal.connect();
  const account = provider_.accounts?.[0] || provider_.selectedAddress;

  const timestamp = Math.round(new Date().getTime() / 1000);
  const start = timestamp + 3600;
  const end = start + 259200;

  const receipt = await client.proposal(web3, getAddress(account), {
    space: "dappchain.eth",
    type: "single-choice",
    title: "Test proposal using Snapshot.js",
    body: "\tbody\t\t",
    choices: ["Alice", "Bob", "Carol"],
    start,
    end,
    timestamp,
    snapshot: 10474139,
    network: "4",
    strategies:
      '[{"name":"erc721","network":"4","params":{"symbol":"GGD","address":"0x04db06CB3bB14B77319c768C24062C8AE851a525"}}]',
    plugins: JSON.stringify({}),
    metadata: JSON.stringify({}),
  });

  console.log(receipt);
}
