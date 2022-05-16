require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1IXL2oWIWQE3uuJZZxXdXgO70yUWOxmC',
      accounts: ['e2accb7239f6b5bd3b9982b45181732bc615564bcf29555399b6577a06c1ac34'],
    },
  },
};