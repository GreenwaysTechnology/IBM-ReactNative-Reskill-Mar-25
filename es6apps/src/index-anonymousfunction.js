//a is variable, 10 value (number)
let a = 10

//hello is variable, function(){} is value called anonymous function
let hello = function () {
    console.log('hello')
};
hello()

//anonymous with args and parameters,returns
let add = function (a=0, b=0) {
    return a + b
}
console.log(add(10,10))