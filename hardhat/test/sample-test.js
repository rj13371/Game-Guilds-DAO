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

    const createGuildTx = await guildNFTContract.connect(user).createGuild({
      guildName: "test",
    });

    const tx = await createGuildTx.wait();
    console.log(tx);

    expect(true).to.equal(true);
  });
});
