//constructors

class Employee {
    id
    name
    status
    constructor(id = 0, name = '', status = true) {
        this.id = id
        this.name = name
        this.status = status
    }
}
let emp = new Employee(1, 'Subramanian', true)
console.log(emp)
console.log(emp.id, emp.name, emp.status)

emp = new Employee()
console.log(emp)
console.log(emp.id, emp.name, emp.status)
