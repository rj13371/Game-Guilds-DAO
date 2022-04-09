const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const assert = require("assert");
const { loadFixture, deployContract } = waffle;

describe("GuildNFT tests", function () {
  it("Should create a guild", async function () {
    [deployer, user, ...addrs] = await ethers.getSigners();

    const GuildNFT = await ethers.getContractFactory("GuildNFT");
    const guildNFTContract = await GuildNFT.deploy();
    await guildNFTContract.deployed();

    const createGuildTx = await guildNFTContract
      .connect(user)
      .createGuild("test", 100);

    const mintNFT = await guildNFTContract
      .connect(user)
      .mintNFT(user.address, "helloWorld", 0);

    const balanceOf = await guildNFTContract
      .connect(user)
      .balanceOf(user.address);

    const returnGuilds = await guildNFTContract.connect(user).returnGuilds();
    console.log(balanceOf, returnGuilds);

    expect(returnGuilds[0].guildMasterAddress).to.equal(user.address);
  });
});
