//sync programming

function blockMe(message) {
    console.log(message)
}
function sayHello(callback) {
    callback('hello')
}
function main() {
    blockMe('start')
    sayHello((res) => {
        console.log(res)
    })
    blockMe('end')
}
main()


