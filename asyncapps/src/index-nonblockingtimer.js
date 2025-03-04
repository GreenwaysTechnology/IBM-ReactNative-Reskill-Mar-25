//async programming / non blocking : we need high level async apis

function blockMe(message) {
    console.log(message)
}
function sayHello(callback) {
    //high level async api
    setTimeout(callback,5000,'Hello')
}
function main() {
    blockMe('start')
    sayHello((res) => {
        console.log(res)
    })
    blockMe('end')
}
main()


