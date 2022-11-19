/**
 * a calculator app that tests the following
 * add, subtract, divide results
 * check for input type
 */

class Calculator {
  typeCheck(num){
    if(typeof(num)=="number"){
      return true
    } 
    return false
  }
  add(num1,num2) {
    if(this.typeCheck(num1) && this.typeCheck(num2)){
      return num1+num2 
    } else{
      throw new Error("invalid datatype, please enter integers")
    }
  }

  subtract(num1,num2) {
    if(this.typeCheck(num1) && this.typeCheck(num2)){
      return num1-num2 
    } else{
      throw new Error("invalid datatype, please enter integers")
    }
  }
}

module.exports = Calculator;
// let calculator = new Calculator()
// console.log(calculator.add(1,2))