// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Project2 {
    string language;
    uint letters;

//this function will initiate the language variable and check if it is same as before 
    function setLang(string memory st) external returns(string memory p) {
        require(keccak256(abi.encodePacked(st)) != keccak256(abi.encodePacked(language)), "New language cannot be the same as the current language.");
        language = st;
        p="Your Language is updated";
        return p;
    }

//it will show the final language and letters on the screen
    function showLang() view external returns(string memory Language, uint Letters){
        return (language , letters);
    }

//this is to initiate the letters variable
    function addLin(uint256 lt) external {
        letters = lt;
    }
}