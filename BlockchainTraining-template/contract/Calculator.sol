pragma solidity ^0.5.0;

contract Calculator {

  uint result;

  constructor() public {
    // constructor
    result=10;
  }

  // returns the result
  function getResult() public view returns (uint){
    return result;
  }

  // result = result + num
  function addNumber(uint num) public returns (uint) {
    result += num;
    return result;
  }

  // result = result - num
  function substractNumber(uint num) public returns (uint) {
    result -= num;
    return result;
  }

  // result = result * num
  function multiplicationNumber(uint num) public  returns (uint) {
    result  *= num;
    return result;
  }

  // result = result / num
  function divideNumber(uint num) public returns (uint) {
    result /= num;
    return result;
  }

}