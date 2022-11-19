const assert = require('assert').strict
const Calculator = require('../index');

describe("init", () =>{
	it("should return length of array", () => {
		let arr = [1,2,3];
		assert.strictEqual(arr.length, 3);
	})
})

describe("typeCheck()",()=>{
	const calculator = new Calculator()
	it('should fail for a string', () =>{
		assert.strictEqual(calculator.typeCheck("5"), false)
	})

	it('should be a number', () =>{
		assert.strictEqual(calculator.typeCheck(5), true)
	})
})

describe("add()",()=>{
	const calculator = new Calculator();

	it("should fail for a string and a number", ()=>{
		const expectedError = new Error("invalid datatype, please enter integers")
		assert.throws(()=>{
			calculator.add("1",2);
		},expectedError)
	})

	it("should add two numbers", ()=>{
		assert.strictEqual(calculator.add(1,2), 3)
	})

	it("should add negative numbers", ()=>{
		assert.strictEqual(calculator.add(-1,-2), -3)
	})
})

describe("subtract()", ()=>{
	const calculator = new Calculator();
	const expectedError = new Error("invalid datatype, please enter integers")
	it("should throw errow for invalid datatype", ()=>{
		assert.throws(()=>{
			calculator.subtract(1,"-2")
		},expectedError)
	})

	it("should subtract numbers", ()=>{
		assert.strictEqual(calculator.subtract(-1,-2), 1)
	})
})
