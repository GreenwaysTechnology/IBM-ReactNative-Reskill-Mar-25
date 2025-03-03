
//literal objects

//emplyee is just variable,reference variable
//{} - object definition
let employee = {
    id: 1,
    name: 'Subramanian',
    status: true
}
console.log(employee)
console.log(employee.id, employee.name, employee.status)

let product = {
    id: 1,
    category: {
        id: 1,
        name: 'Electronics'
    }
}
console.log(product.id, product.category.name)