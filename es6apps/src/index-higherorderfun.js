//higher order function ; passing function as parameter 

//here a and b are variables can hold any literals
function add(a, b) {
    return a + b
}
//10 and 10 are numbers
console.log(add(10, 10))
let x = 10
let y = 20
console.log(add(x, y))
///////////////////////////////////////////////////////////////////////
//higher order function

function connect(callback) {
    callback()
}
let sqlconnect = function () {
    console.log('hello')
}
connect(sqlconnect)

connect(function () {
    console.log('hello')
})
//arrow version

const process = (callback) => {
    callback()
}
process(() => {
    console.log('process')
})
process(() =>console.log('process'))