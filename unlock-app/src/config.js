let defaultNetworks = {
  dev: {
    url: 'ws://127.0.0.1:8545',
    name: 'Development',
    protocol: 'ws', // couldn't we extract that from url?
    unlock: '',
  },
  ganache: {
    url: 'ws://127.0.0.1:8546',
    name: 'Ganache',
    protocol: 'ws', // couldn't we extract that from url?
    unlock: '',
  },
  rinkeby: {
    url: 'https://rinkeby.infura.io/DP8aTF8zko71UQIAe1NV ',
    name: 'Rinkeby',
    protocol: 'http', // couldn't we extract that from url?
    unlock: '',
  },
}

// Let's see if web3 is defined thru metamask
// and eventually add that as an option!
if (typeof window.web3 !== 'undefined') {
  const provider = window.web3.currentProvider
  if (provider.isMetaMask) {
    defaultNetworks.metamask = {
      name: 'Metamask',
      provider,
    }
  }
}

export const networks = defaultNetworks