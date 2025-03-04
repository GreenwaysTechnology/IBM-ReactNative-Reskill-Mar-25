const info = require('./lib/mylib')

// const {firstName,lastName} = require('./lib/mylib')

// const TodoService = require('./lib/todo.service')
// const todoService = require('./lib/todo.service')
const { findAll } = require('./lib/todo.service')


console.log(info)
console.log(info.sayHello(), info.firstName)
// console.log(TodoService)
// let toservice=new TodoService()
// console.log(toservice.findAll())
// console.log(todoService.findAll())
console.log(findAll())
