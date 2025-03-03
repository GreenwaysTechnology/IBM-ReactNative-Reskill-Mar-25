
// function printEmployee(employee) {
//     console.log(`Id : ${employee.id}`)
//     console.log(`Name : ${employee.name}`)
//     console.log(`City : ${employee.address.city}`)
// }
// printEmployee({ id: 1, name: 'Subramnaian', address: { city: 'Coimbatore' } })


//object destructuring 
// function printEmployee(employee) {
//     //destructure(break down object  properites)
//     const { id, name, address } = employee
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
// printEmployee({ id: 1, name: 'Subramnaian', address: { city: 'Coimbatore' } })

// //nested object destructuring
// function printEmployee(employee) {
//     //destructure(break down object  properites)
//     const { id, name, address: { city } } = employee
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }
// printEmployee({ id: 1, name: 'Subramnaian', address: { city: 'Coimbatore' } })

//nested object destructuring
// function printEmployee({ id, name, address: { city } }) {
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }
// printEmployee({ id: 1, name: 'Subramnaian', address: { city: 'Coimbatore' } })

const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`Id : ${id}`)
    console.log(`Name : ${name}`)
    console.log(`City : ${city}`)
}
printEmployee({ id: 1, name: 'Subramnaian', address: { city: 'Coimbatore' } })