module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "5777" // Match any network id
      }
    }
    ,compilers: {
        solc: {
          version: "0.8.1", // Change this to your desired version
          settings: {
            optimizer: {
              enabled: true,
              runs: 200
            }
          }
        }
      }
  };
  