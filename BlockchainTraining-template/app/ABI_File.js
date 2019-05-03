const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "addNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "divideNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "multiplicationNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "substractNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getResult",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const bytecode = { "object": "608060405234801561001057600080fd5b50600a60008190555061027d806100286000396000f3fe608060405260043610610067576000357c0100000000000000000000000000000000000000000000000000000000900480630b7e4e7f1461006c57806326b7c5cc146100bb5780632ac45d9c1461010a578063de29278914610159578063fce6802314610184575b600080fd5b34801561007857600080fd5b506100a56004803603602081101561008f57600080fd5b81019080803590602001909291905050506101d3565b6040518082815260200191505060405180910390f35b3480156100c757600080fd5b506100f4600480360360208110156100de57600080fd5b81019080803590602001909291905050506101ee565b6040518082815260200191505060405180910390f35b34801561011657600080fd5b506101436004803603602081101561012d57600080fd5b8101908080359060200190929190505050610209565b6040518082815260200191505060405180910390f35b34801561016557600080fd5b5061016e61022d565b6040518082815260200191505060405180910390f35b34801561019057600080fd5b506101bd600480360360208110156101a757600080fd5b8101908080359060200190929190505050610236565b6040518082815260200191505060405180910390f35b60008160008082825403925050819055506000549050919050565b60008160008082825402925050819055506000549050919050565b60008160008082825481151561021b57fe5b04925050819055506000549050919050565b60008054905090565b6000816000808282540192505081905550600054905091905056fea165627a7a723058204886fd2facf2f7cbffa5dc9b5af37861abe65444d9ddb0832f4b6340155488ff0029" };

module.exports = { abi, bytecode };