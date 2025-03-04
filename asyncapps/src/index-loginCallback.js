//async programming / non blocking : we need high level async apis

function blockMe(message) {
    console.log(message)
}
//resolve means success,reject means failure
function login(userName, password, resolve, reject) {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'Login failed')
    }
}
function main() {
    blockMe('start')
    login('admin', 'admin', (status) => { console.log(status) }, (err) => { console.log(err) })
    blockMe('end')
}
main()


