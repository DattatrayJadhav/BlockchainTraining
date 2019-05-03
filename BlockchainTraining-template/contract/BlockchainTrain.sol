pragma solidity ^0.5.0;
//pragma experimental ABIEncoderV2;
contract BlockchainTrainingContract{
    
    struct studentClass {
       string  StudName;
       string  StudClass;
       address  StudIdentity;
       bool StudResult;
    }
    
    mapping(uint256 => studentClass) studentDetails;
    // mapping(address => string) test1;
    // mapping(string => uint256) test2;
    // mapping(address => bool) test3;
    // mapping(address => mapping(address => uint256)) test4;
    mapping(address => uint256) balances;
    
    address public owner;
    constructor() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner{
       require(msg.sender == owner, "This person is NOT authorized to call this function");
       _;
    }
    
    function addStudentDetails(uint256 _id, string memory _nm, string memory _class, bool _result) public onlyOwner {
    // require(msg.sender == owner, "This person is NOT authorized to call this function");
    //if(msg.sender == owner) {
    studentClass storage s = studentDetails[_id];
        s.StudName = _nm;
        s.StudClass = _class;
        s.StudIdentity = msg.sender;
        s.StudResult = _result;
     }
    //}
    //  } else { 
    //     errMessage = "This person is NOT allowed";
    // }
    
    function getStudentInformation(uint256 _id) public view returns(string memory Name, string memory Class, address Identity, bool Result) {
    //function getStudentInformation(uint256 _id) public view returns(studentClass memory) {
        studentClass memory p = studentDetails[_id];
        //return (p);
        return(p.StudName,
               p.StudClass,
               p.StudIdentity,
               p.StudResult);
    }
    
    function fundTransfer(uint256 _amount, address _to) public payable {
        require(balances[msg.sender] >= _amount);
        balances[_to] += _amount;
        balances[msg.sender] -= _amount;
    }
    function getBalance(address _adddressOfPerson) view public returns(uint256){
        return balances[_adddressOfPerson];
    }
}