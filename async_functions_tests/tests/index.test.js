/* eslint-disable no-undef */
const assert = require('assert').strict
const AsynchronousMethods = require('../index')
describe("init", ()=>{
  it("should fail for unequal values",()=>{
    assert.notStrictEqual(1,2)
  })
  it("should pass for equal values",()=>{
    assert.strictEqual(1,1)
  })
})

describe("fetch()", ()=>{
  const asynchronousMethods = new AsynchronousMethods()
  it("should fail for fetch", () =>{
    assert.strictEqual(asynchronousMethods.fetch(1), 1)    
  })

  it("should fail for string id", ()=>{
    const expectedError = "invalid id"
    assert.throws(()=>{
      asynchronousMethods.fetch("1")
    },expectedError)
  })
})