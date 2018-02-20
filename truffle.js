module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6500000,
      network_id: "5777"
    }
  },
  solc: {
     optimizer: {
       enabled: true,
       runs: 200
     }
  }
};