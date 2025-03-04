import { EventEmitter } from 'node:events'

//custom event driven programming
//to register listener we have "on" method, to emit event we have "emit method"

class Sales extends EventEmitter {
    constructor() {
        super()
        this.on('onsold', (evt) => {
            console.log(evt)
        })
    }
    sale(product) {
        this.emit('onsold', product)
    }
}
function main() {
    let sales = new Sales()
    sales.sale({ id: 1, name: 'product1' })
}
main()