const web3 = require('web3');
const Tx = require('ethereumjs-tx');
const fs = require('./ABI_File.js')


//Infura HttpProvider Endpoint
web3js = new web3(new web3.providers.HttpProvider("https://rinkeby.infura.io/v3/268845c3949143bdbc99f67662f59939"));

var contractFunction = async function (args) {
    var myAddress = args.publicAddress;
    var privateKey = Buffer.from(args.privateKey, 'hex')
    var contractABI = fs.abi;

    try {
        var contractAddress = args.contractAddress;
        //creating contract object
        var contract = web3js.eth.contract(contractABI).at(contractAddress);

        // get transaction count, later will used as nonce
        count = web3js.eth.getTransactionCount(myAddress)
        console.log("Count: " + count);

        switch (args.operation) {

            case "getResult":
                console.log(contract.getResult())
                return contract.getResult()
                break;

            case "addNumber":
                var data = contract.addNumber.getData(args.number);
                var rawTransaction = { "from": myAddress, "gasPrice": web3js.toHex(20 * 1e9), "gasLimit": web3js.toHex(990000), "to": contractAddress, "value": "0x0", "data": data, "nonce": web3js.toHex(count) }
                console.log("rawTransaction", rawTransaction);
                break;

            case "substractNumber":
                var data = contract.substractNumber.getData(args.number);
                var rawTransaction = { "from": myAddress, "gasPrice": web3js.toHex(20 * 1e9), "gasLimit": web3js.toHex(990000), "to": contractAddress, "value": "0x0", "data": data, "nonce": web3js.toHex(count) }
                console.log("rawTransaction", rawTransaction);
                break;

            case "multiplicationNumber":
                var data = contract.multiplicationNumber.getData(args.number);
                var rawTransaction = { "from": myAddress, "gasPrice": web3js.toHex(20 * 1e9), "gasLimit": web3js.toHex(990000), "to": contractAddress, "value": "0x0", "data": data, "nonce": web3js.toHex(count) }
                console.log("rawTransaction", rawTransaction);
                break;

            case "divideNumber":
                var data = contract.divideNumber.getData(args.number);
                var rawTransaction = { "from": myAddress, "gasPrice": web3js.toHex(20 * 1e9), "gasLimit": web3js.toHex(990000), "to": contractAddress, "value": "0x0", "data": data, "nonce": web3js.toHex(count) }
                console.log("rawTransaction", rawTransaction);
                break;
        }
        var transaction = new Tx(rawTransaction);
        transaction.sign(privateKey);
        var txHash = web3js.eth.sendRawTransaction('0x' + transaction.serialize().toString('hex'))
        console.log(txHash);

        while (true) {
            if (web3js.eth.getTransactionReceipt(txHash) != null) {
                console.log(web3js.eth.getTransactionReceipt(txHash))
                var receipt = web3js.eth.getTransactionReceipt(txHash);
                var transactionHash = receipt.transactionHash;
                if (receipt.status == '0x1') {
                    return JSON.stringify({ 'TransactionHash': transactionHash });
                } else {
                    return JSON.stringify({ 'ERROR': 'The ERROR occured while executing the function' });
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.contractFunction = contractFunction;   
