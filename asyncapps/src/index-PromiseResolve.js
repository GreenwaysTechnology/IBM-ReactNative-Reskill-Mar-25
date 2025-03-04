//Promise factory api with success and default async

function blockMe(message) {
    console.log(message)
}
function sayHello() {
    return Promise.resolve('hello')
}
function main() {
    blockMe('start')
    sayHello().then(res => console.log(res))
    blockMe('end')
}
main()
