import snapshot from "@snapshot-labs/snapshot.js";
import Moralis from "moralis";
import { Web3Provider } from "@ethersproject/providers";

export async function createProposal() {
  const hub = "https://hub.snapshot.org"; // or https://testnet.snapshot.org for testnet
  const client = new snapshot.Client712(hub);
  //const web3 = await Moralis.enableWeb3();

  const web3 = new Web3Provider(window.ethereum);
  const [account] = await web3.listAccounts();

  const receipt = await client.proposal(web3, account, {
    space: "dappchain.eth",
    type: "single-choice",
    title: "Test proposal using Snapshot.js",
    body: "",
    choices: ["Alice", "Bob", "Carol"],
    start: Date.now(),
    end: Date.now() + 100,
    snapshot: 10474139,
    network: "4",
    strategies: JSON.stringify([
      {
        name: "erc721",
        network: "4",
        params: {
          symbol: "GGD",
          address: "0x04db06CB3bB14B77319c768C24062C8AE851a525",
        },
      },
    ]),
    plugins: JSON.stringify({}),
    metadata: JSON.stringify({}),
  });

  console.log(receipt);
}
