const Todos = require('../index');
const assert = require('assert').strict;

/**
 * test template on mocha
 
  describe([String with Test Group Name], function() {
    it([String with Test Name], function() {
        [Test Code]
    });
  });

 */

describe("Integration Tests", function(){
  it("Should be able to add and comlete TODOs", function(){
    let todos = new Todos()
    assert.deepStrictEqual(todos.list().length, 0);
  })
});

describe("complete()", function(){
  it("should fail if there are no TODOs", function(){
    let todo = new Todos();
    const expectedError = new Error("You have no TODOs. Why don't you add one first?");
    assert.throws(()=>{
      todo.complete("eat food")
    }, expectedError)
  })
})

// Asynchronous testing

describe('fetchTodos()', () => { 
  it("should fetch todos from the server and add to array", async () =>{
    let todos = new Todos();
    let fetchedTodos = await todos.fetchTodos(1);
    assert.deepStrictEqual(todos.list().length, 1);
  })
  
  it("should fail if API call fails", async () =>{
    let todos = new Todos();
    const expectedError = new Error("invalid id");
    await assert.rejects(async ()=>{
      let fetchedTodos = await todos.fetchTodos(9999);
    }, expectedError)
  })
 })
