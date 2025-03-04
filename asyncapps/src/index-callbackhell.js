//callback nesting or async composition

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    //dummy user object
    let user = {
        name: 'admin'
    }
    // user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User not Found')
    }
}
//login function 
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to Dashboard')
    } else {
        setTimeout(reject, 1000, 'Sorry you are not allowed')
    }
}


function main() {
    getUser((user) => {
        login(user, (status) => {
            showDashboard(status, (dpage) => {
                console.log(dpage)
             }, err => console.log(err))
        }, (err) => console.log(err))
    }, (err) => console.log(err))
}
main()