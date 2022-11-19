const fetch = require('node-fetch')
class Todos {
  constructor() {
    this.todos = [];
  }

  list() {
    return [...this.todos];
  }
  add(title) {
    let todo = {
        title: title,
        completed: false,
    }
    this.todos.push(todo);
  }

  complete(title) {
    if(this.todos.length == 0){
      throw new Error("You have no TODOs. Why don't you add one first?");
    }
    let todoFound = false;
    this.todos.forEach((todo) => {
        if (todo.title === title) {
            todo.completed = true;
            todoFound = true;
            return;
        }
    });
    if (!todoFound) {
        throw new Error(`No TODO was found with the title: "${title}"`);
    }
  }

  async fetchTodos(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => {
        if(Object.keys(json).length == 0){
          throw new Error("invalid id")
        }
        this.add(json.title)
        return json.title
      }).catch(err =>{
        throw new Error(err.message)
      });
    return res
  }
  
}

// const todo = new Todos()

// console.log(todo.fetchTodos(10000000).then(res => console.log(res)))
module.exports = Todos;

