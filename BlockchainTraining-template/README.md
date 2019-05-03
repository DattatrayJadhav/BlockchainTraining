

API Calls- 
POST- http://localhost:4040/deploy
{
"arguments": {
"publicAddress": "0xF3606F6189D2c332a344FBAd531b33090357dD37",
"privateKey": "355029B1EC3CFC01A6EBA0DD11EA79BA6385FDE230479C2B5C85A97DAF49CE9A"
}
}
-----------------------------------------------------

POST- http://localhost:4040/contractFunctions
{
"arguments": {
"publicAddress":"0xF3606F6189D2c332a344FBAd531b33090357dD37",
"privateKey":"355029B1EC3CFC01A6EBA0DD11EA79BA6385FDE230479C2B5C85A97DAF49CE9A",
"contractAddress":"0xe35ddb5ed690cd4d76be48f94b04fbca9dda9df0",
"operation":"addNumber",
"number": 50
}
}
-----------------------------------------------------
POST- http://localhost:4040/contractFunctions
{
"arguments": {
 "publicAddress":"0xF3606F6189D2c332a344FBAd531b33090357dD37",
 "privateKey":"355029B1EC3CFC01A6EBA0DD11EA79BA6385FDE230479C2B5C85A97DAF49CE9A",
 "contractAddress":"0xe35ddb5ed690cd4d76be48f94b04fbca9dda9df0",
 "operation":"getResult"
}
}