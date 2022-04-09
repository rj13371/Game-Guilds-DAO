//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract GuildNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("GuildNFT", "GGD") {}

    struct Guild {
        address guildMasterAddress;
        string guildName;
    }

    Guild[] Guilds;

    mapping(uint256 => Guild[]) public tokenIdsToGuild;

    function createGuild(string memory guildName)
        public
        returns (address)
    {
        Guild memory guild = Guild(msg.sender, guildName);
        Guilds.push(guild);

        return msg.sender;
    }

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        tokenIdsToGuild[newItemId];
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
