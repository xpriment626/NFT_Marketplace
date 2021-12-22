// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import './ERC721Connector.sol';

contract SpaceMonkez is ERC721Connector {

    // array to store our nfts
    string [] public spaceMonkez;

    mapping(string => bool) _spaceMonkezExists;

    function mint(string memory _spaceMonke) public {

        require(!_spaceMonkezExists[_spaceMonke],
        'Error - kryptoBird already exists');
        // this is deprecated - uint _id = spaceMonkez.push(_spaceMonke);
        spaceMonkez.push(_spaceMonke);
        uint _id = spaceMonkez.length - 1;

        // .push no longer returns the length but a ref to the added element
        _mint(msg.sender, _id);

        _spaceMonkezExists[_spaceMonke] = true;

    }

    constructor() ERC721Connector('SpaceMonke','SMKZ'){}

}