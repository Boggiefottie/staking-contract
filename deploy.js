module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      
    },
    matic: {
      provider: () => new HDWalletProvider({
        privateKeys: ["YOUR_METAMASK_PRIVATE_KEY"],
        providerOrUrl: "https://polygon-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      }),
      network_id: 137, // Polygon Mainnet
      gas: 5500000, // Gas limit
      confirmations: 2, // Number of confirmations
      timeoutBlocks: 200, // # of blocks before a deployment times out
      skipDryRun: true // Skip dry run before migrations? (default: false for Truffle Teams)
    },
  }
};
