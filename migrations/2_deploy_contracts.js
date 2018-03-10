var BoutsCrowdsale = artifacts.require("./BoutsCrowdsale.sol");

module.exports = function(deployer) {
  const startTime = Math.round((new Date(Date.now() + 3600000).getTime())/1000); // After and hour
  const endTime = Math.round((new Date().getTime() + (86400000 * 15))/1000); // Today + 15 days
  deployer.deploy(BoutsCrowdsale, 
    startTime, 
    endTime,
    9000, 
    "0x8ece34bc23efb1EfBF8762C0D9bF1a87ef98EB75",  
    "0xc36D28c6226A64C91e9499b7F4D2046678054bc7", 
    "0xC2164cb75cdB2A6F53814fFc59A09C740846F83F" 
  );
};