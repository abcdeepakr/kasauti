/* eslint-disable no-undef */
const assert = require('assert').strict
const API = require('../api/api')
const AsynchronousMethods = require('../index')


// describe("init", ()=>{
//   it("should fail for unequal values",()=>{
//     assert.notStrictEqual(1,2)
//   })
//   it("should pass for equal values",()=>{
//     assert.strictEqual(1,1)
//   })
// })

// describe("fetch()", ()=>{
//   const asynchronousMethods = new AsynchronousMethods()
//   it("should fail for id", async () =>{
//     let response = await asynchronousMethods.fetch(1)
//     assert.notStrictEqual(response.data.id, 2)    
//   })

//   it("should fail for string id", ()=>{
//     const expectedError = "invalid id"
//     assert.rejects(()=>{
//       asynchronousMethods.fetch("1")
//     },expectedError)
//   })
//   it('should return status code 404 for invalid id', async ()=>{
//     let response = await asynchronousMethods.fetch(999)
//     assert.strictEqual(response.status, 404)
//   })
//   it('should pass for valid id', async ()=>{
//     let response = await asynchronousMethods.fetch(1)
//     assert.strictEqual(response.status, 200)
//   })
//   it('should pass for valid json body', async ()=>{
//     let response = await asynchronousMethods.fetch(1)
//     assert.strictEqual(response.data.hasOwnProperty("id"), true)
//   })
//   it('should return empty json for invalid id', async ()=>{
//     let response = await asynchronousMethods.fetch(1000)
//     assert.strictEqual(Object.keys(response.data).length, 0)
//   })
// })



/*
 * Insertion test
 * Testing for the following scenarios:
 * 
 * 1) Valid request method
 * 2) Valid request body
 * 3) Valid request body data
 * 4) request body data exists
 * 5) positive testing for valid input (all good)
 * 6) negative testing for valid input (invalid request, like user_id already exists)
 * 7) positive testing for invalid input (all bad fails successfully)
 * 8) negative testing for invalid input (all bad fails unsuccessfully)
 * 
 */
describe('insert()', () => { 
  const asynchronousMethods = new AsynchronousMethods()
  const validReqBody = {
    title: 'This is a valid request body.',
    body: 'the body key for the valid request body',
    userId: 101,
    route: "posts"
  }
  
  const missingBodyParameter = {
    title: 'This is an invalid request body.',
    body: 'the body key for the valid request body',
    route: "posts"
  }
  const invalidParameterType = {
    title: 'This is an invalid request body.',
    body: 'the body key for the valid request body',
    userId: "string",
    route: "posts"
  }
  const existingId = {
    title: 'This is an invalid request body.',
    body: 'the body key for the valid request body',
    userId: 10,
    route: "posts"
  }

  it('should fail for invalid request body', ()=>{
    const expectedError = new Error("invalid request body")
    assert.rejects(()=>{
      asynchronousMethods.insert(missingBodyParameter)
    }, expectedError)
  });

  it('should fail for invalid type', ()=>{
    const expectedError = new Error("invalid request body")
    assert.rejects(()=>{
      asynchronousMethods.insert(invalidParameterType)
    }, expectedError)
  })

  it('should pass for valid request body', async ()=>{
    const response = await asynchronousMethods.insert(validReqBody)
    assert.strictEqual(response.status,201);

  })
  it('should fail for existing userid', async ()=>{
    const response = await asynchronousMethods.insert(validReqBody)
    assert.strictEqual(response.status,201);
  })
 })
