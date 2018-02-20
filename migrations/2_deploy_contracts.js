var BoutsCrowdsale = artifacts.require("./BoutsCrowdsale.sol");

module.exports = function(deployer) {
  const startTime = Math.round((new Date(Date.now() - 86400000).getTime())/1000); // Yesterday
  const endTime = Math.round((new Date().getTime() + (86400000 * 20))/1000); // Today + 20 days
  deployer.deploy(BoutsCrowdsale, 
    startTime, 
    endTime,
    3000, 
    "0x0F4F2Ac550A1b4e2280d04c21cEa7EBD822934b5", // Replace this wallet address with the last one (10th account) from Ganache UI. This will be treated as the beneficiary address. 
    "0x6330A553Fc93768F612722BB8c2eC78aC90B3bbc", // 2 ETH
    "0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE" // 500 ETH
  );
};