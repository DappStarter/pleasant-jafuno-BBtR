require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember equip grid problem orange genius'; 
let testAccounts = [
"0xa594c048aa1631b2dd49c78e88dbb173cd463b3782a7c6ad32f4a9fefe774f65",
"0x43e6c96ddffec1d71d479502a832cbf43a3f1530db94876270e64aaa3273091f",
"0x84410f8ce68896a892309bb4892865584bd02db037cd1312108a31ada76a3177",
"0x1e2c491301bda85512f0e3112d37a0db0fd44a42462d961b3edabceb944178cd",
"0x8f75ae3c7f07a2fa23ea30d2f8cae280c29d0939f0eaf264ed984c3c8933ff8f",
"0xedaf3ff386a20339330b7e85e8fc0e61f43daea31b55ad9d1853a26c9594b324",
"0x1770787cc7ab9c77900ba86f3e5e80a143b05fad89626ec4096c1a6162f4ab4c",
"0x4550c8638cd6a01ebccb34f45890799dfa585f01f247416cc2e1930f0d31ba7b",
"0xdbfb9c4203022b76d704304bd15b734c782ed41e19881749411f1c8f3a6a71b9",
"0x4a2d206fc50468be4d96810d9c0544abab875c471dacf701d8fbc254cb4e67f1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

