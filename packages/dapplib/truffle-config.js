require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rebel sister collect install battle equal gas'; 
let testAccounts = [
"0x709725d0462ab2850744c788af3f0b2067f957e0c3d24a49b87e02e1bd039907",
"0x4bad255104e3a755abfef1b8428a9081ef4ac5078f43dfcb6a5ec0c796fe11d9",
"0xa018ad780b59a08c8cd3bffafb143b856161484040a9d82ce0de7d84819a9601",
"0xed4ae1c74380c462d45cdb9cf9ef0973fe0aa7c265903369dcb53c1b3a86dc12",
"0xe4569fc66bba83781913f3689c6bddbdcbb520d05b250cb538ac3471f845db2d",
"0x4278399172046507a63058e9680e2f6632869aa3f540ddf3d88ccfcc560814b6",
"0xc5c29121d17c2a4d8f123c88fcc1a6aaea9c2ca3afa89eee64d1ace6900675dc",
"0x2fc493ce3c15a75ae46c6ef1898652b1d6f48e74d25846555576f5bb088e0a27",
"0x73c841733a31d89422170bcf2a36fc581a8f89deb4562490a476b729b0d28d03",
"0x70ce4f935c38fe7b763da325675604be2669bf4a63d5d32bdf52687b4d11f440"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

