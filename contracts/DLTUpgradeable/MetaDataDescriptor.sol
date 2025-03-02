// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

library MetaDataDescriptor {
    function generateJSON(
        string memory name,
        string memory image
    ) public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "{",
                    '"name": "',
                    name,
                    '",',
                    '"image": "',
                    image,
                    '"',
                    "}"
                )
            );
    }

    // Helper function to convert uint256 to string
    function uint2str(uint256 _i) public pure returns (string memory str) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        j = _i;
        while (j != 0) {
            bstr[--k] = bytes1(uint8(48 + (j % 10)));
            j /= 10;
        }
        str = string(bstr);
    }
}
