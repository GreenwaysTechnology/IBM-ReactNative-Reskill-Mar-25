
//login 
//resolve means success
//reject means failure
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve()
    } else {
        reject()
    }
}
login('admin', 'admin', () => {
    console.log('login success')
}, () => {
    console.log('login failed')
})
login('xx', 'xx', () => {
    console.log('login success')
}, () => {
    console.log('login failed')
})