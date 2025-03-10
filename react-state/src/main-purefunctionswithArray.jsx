//push is impure function

// function add(todos, todo) {
//     return todos.push(todo)
// }

// function add(todos, todo) {
//     // return todos.push(todo)
//     return todos.concat(todo)
//  }

function add(todos, todo) {
    // return todos.push(todo)
    //  return todos.concat(todo)
    return [...todos, todo]
}
let todos = [{
    title: 'Learn react',
    done: true
}];

//Testing 
Object.freeze(todos)
console.log(todos === add(todos, { title: 'Learn Microservices', done: false }) ? "Same" : "Different");
