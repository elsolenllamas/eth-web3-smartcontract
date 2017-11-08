pragma solidity ^0.4.18;

contract demoContract {
    struct User {
        string uName;
    }
    
    mapping (address => User) users;
    address[] public userAtts;
    
    function setUser(address _address, string _uName) public {
        var user = users[_address];
        
        user.uName = _uName;
        
        userAtts.push(_address) -1;
    }
    
    function getUsers() view public returns(address[]) {
        return userAtts;
    }
    
}