// SPDX-License-Identifier: GPL-3.0 
 
pragma solidity 0.8.28; 
 
contract  Greeter{ 
    string public greeting ="CSE"; 
 
 
    function SetGreeting(string memory _greeting) public{ 
        greeting = _greeting; 
    } 
    function greet() view public returns(string memory){ 
        return greeting; 
    } 
} 