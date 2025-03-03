// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 1000
//     }
// }
// console.log(getStock())

//dynamic objects
// function getStock(id = 0, symbol = 'google', qty = 0, price = 0) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock())
// console.log(getStock(1,'google',100,10000))

//object destructuring
// function getStock(id = 0, symbol = 'google', qty = 0, price = 0) {
//     //if key and value id:id , same, means we can remove any one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock())
// console.log(getStock(1, 'google', 100, 10000))

// const getStock=(id = 0, symbol = 'google', qty = 0, price = 0) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock())
// console.log(getStock(1, 'google', 100, 10000))


const getStock = (id = 0, symbol = 'google', qty = 0, price = 0) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock())
console.log(getStock(1, 'google', 100, 10000))