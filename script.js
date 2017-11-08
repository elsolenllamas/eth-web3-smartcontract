 if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
     console.log(web3);
 } else {
     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
     console.log(web3);
 }

 web3.eth.defaultAccount = web3.eth.accounts[0];

 var demoContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getUsers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_uName","type":"string"}],"name":"setUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userAtts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]);

 var demoUser = demoContract.at('0xef55bfac4228981e850936aaf042951f7b146e41');

 document.getElementById('sendButton').addEventListener('click', function() {
     demoUser.setUser(web3.eth.defaultAccount, document.getElementById('userName').value);
 });