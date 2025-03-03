class Account {
    constructor() {
        console.log('Account')
    }
    deposit(){
        return 100
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings Account')
    }
    deposit(){
        return 1000
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())