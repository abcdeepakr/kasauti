const assert = require('assert').strict

describe("init", ()=>{
  it("should fail for unequal values",()=>{
    assert.notStrictEqual(1,2)
  })
  it("should pass for equal values",()=>{
    assert.strictEqual(1,1)
  })
})

describe("fetch()", ()=>{
  
})