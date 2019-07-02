const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1554833725756,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1554833771255,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1554833779183,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "7296f7c05af311e9ba8b7d7db07e7a30",
                    "transactionId": "8db7da605af311e9ba8b7d7db07e7a30"
                }
            ],
            "nonce": 13575,
            "hash": "000019287a0e630063499a389ffbcb18017697c74e31f9095e9ff2362e74b1dc",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1554833844386,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "6e82a8005af311e9bab7298343695592",
                    "transactionId": "927059605af311e9bab7298343695592"
                },
                {
                    "amount": 50,
                    "sender": "ADGSFDGSFD5d574754DSGFSD6",
                    "recipient": "DSAGFDA457GF6DSG7DG"
                }
            ],
            "nonce": 17139,
            "hash": "0000a2c95fa969555f720e971f2949d5d87aa0c9a737b5edddcdbcf7cb50b7ea",
            "previousBlockHash": "000019287a0e630063499a389ffbcb18017697c74e31f9095e9ff2362e74b1dc"
        },
        {
            "index": 5,
            "timestamp": 1554833883147,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "6e82a8005af311e9bab7298343695592",
                    "transactionId": "b94d14605af311e9bab7298343695592"
                },
                {
                    "amount": 300,
                    "sender": "Sender1",
                    "recipient": "Recipient1",
                    "transactionId": "cb02c5605af311e9bab7298343695592"
                }
            ],
            "nonce": 118487,
            "hash": "0000d426fb3c9e79ca047616ddc77d5d7e80a56446aaa427c6d8edb909a40d9d",
            "previousBlockHash": "0000a2c95fa969555f720e971f2949d5d87aa0c9a737b5edddcdbcf7cb50b7ea"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "6e82a8005af311e9bab7298343695592",
            "transactionId": "d0673bd05af311e9bab7298343695592"
        }
    ],
    "currentNodeUrl": "http://localhost:3002",
    "networkNodes": [
        "http://localhost:3001"
    ]
};



console.log(bitcoin.chainIsValid(bc1.chain));