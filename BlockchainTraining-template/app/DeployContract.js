const Web3 = require('web3');
const Tx = require('ethereumjs-tx')
const fs = require('./ABI_File.js')

//function defination starts here
var deployContract = async function (args) {

    var privateKey = new Buffer(args.privateKey, 'hex')
    var myAddress = args.publicAddress;

    // Connect to local Ethereum node
    const web3js = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/268845c3949143bdbc99f67662f59939"));

    const contract = new web3js.eth.contract(fs.abi);

    const hexdata = contract.new.getData({ data: fs.bytecode.object });

    count = web3js.eth.getTransactionCount(myAddress)
    console.log("Count: " + count);
    //creating raw tranaction
    try {
        var rawTransaction = {"from": myAddress,"gasPrice": web3js.toHex(105 * 1e9),"gasLimit": web3js.toHex(3990000),"value": "0x0","data": '0x' + hexdata,"nonce": web3js.toHex(count)}
        console.log(rawTransaction);
    } catch (error) {
        console.log(error)
    }
    //creating tranaction via ethereumjs-tx
    var transaction = new Tx(rawTransaction);
    //signing transaction with private key
    transaction.sign(privateKey);
    //sending transacton via web3js module
    try {
        var txHash = web3js.eth.sendRawTransaction('0x' + transaction.serialize().toString('hex'));
        console.log(txHash)

        while (true) {
            if (web3js.eth.getTransactionReceipt(txHash) != null) {
                console.log("Transaction Block", web3js.eth.getTransactionReceipt(txHash))
                var receipt = web3js.eth.getTransactionReceipt(txHash);
				var contractAddress = receipt.contractAddress;
                var transactionHash = receipt.transactionHash;
                if(receipt.status == '0x1'){ 
                    return JSON.stringify({ 'ContractAddress': contractAddress, 'TransactionHash': transactionHash} );
                 } else {
                    return JSON.stringify({ 'ERROR': 'The ERROR occured while deploying Master contract!' });
                 }
            }
        }
    } catch (error) {
        console.log(error)
    }
}
exports.deployContract = deployContract;   