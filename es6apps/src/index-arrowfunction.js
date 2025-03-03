
//old style or es 5 style of anonymous function
let hello = function () {
    console.log('hello')
}
//mordern sytle or es 6 style of anonymous function - arrow functions
let hai = () => {
    console.log('hai')
}
hai()
//arrow with parameters
let add = (a, b) => {
    let c = a + b
    console.log(c)
}
add(10, 10)
//if function has only one line of code, we can remove {}

hai = () => console.log('hai')
hai()

//arrow with return
add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function has only return statement , then we can remove {} and return statement 
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))