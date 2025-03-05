
const CUSTOMERS = [{
    id: 1,
    name: 'customer1'
},
{
    id: 2,
    name: 'customer2'
},
{
    id: 3,
    name: 'customer3'
}
]
class CustomerService {

    findAll() {
        return Promise.resolve(CUSTOMERS)
    }
}

module.exports = new CustomerService()