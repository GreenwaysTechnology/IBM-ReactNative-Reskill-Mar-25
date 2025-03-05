
const users = [{
    id: 1,
    name: 'Subramanian'
},
{
    id: 2,
    name: 'Murugan'
}
]

class UserService {
    constructor() {

    }
    //sync api
    // findAll() {
    //     return users;
    // }
    //async callback way:
    // findAll(callback) {
    //     setTimeout(callback, 1000, users)
    // }
    //promise based
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, users)
        })
    }
    save(user){
        console.log(user)
        return Promise.resolve('saved')
    }
}
module.exports = new UserService()