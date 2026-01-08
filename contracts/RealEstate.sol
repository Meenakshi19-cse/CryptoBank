// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract RealEstate { struct Property 
{ uint256 id; 
string name; 
string location; 
uint256 price; 
address owner;
 }

mapping(uint256 => Property) public properties;
uint256 public propertyCount;

event PropertyAdded(uint256 id, string name, string location, uint256 price, address owner);
event OwnershipTransferred(uint256 id, address oldOwner, address newOwner);

function addProperty(string memory _name, string memory _location, uint256 _price) public {
    propertyCount++;
    properties[propertyCount] = Property(propertyCount, _name, _location, _price, msg.sender);
    emit PropertyAdded(propertyCount, _name, _location, _price, msg.sender);
}

function getProperty(uint256 _id) public view returns (string memory, string memory, uint256, address) {
    Property memory prop = properties[_id];
    return (prop.name, prop.location, prop.price, prop.owner);
}

function transferOwnership(uint256 _id, address _newOwner) public {
    Property storage prop = properties[_id];
    require(msg.sender == prop.owner, "Only the owner can transfer ownership");
    address oldOwner = prop.owner;
    prop.owner = _newOwner;
    emit OwnershipTransferred(_id, oldOwner, _newOwner);
}

}

