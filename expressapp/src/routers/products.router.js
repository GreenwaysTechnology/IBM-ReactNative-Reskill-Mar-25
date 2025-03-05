const express = require('express')
//create router
const productRouter = express.Router()

//expose api
productRouter.get('/', async (req, res) => {
    try {
        res.json({ message: 'product get' })
    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})

productRouter.post('/', async (req, res) => {
    try {
        res.json({ message: 'product save' })
    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})
productRouter.put('/', async (req, res) => {
    try {
        res.json({ message: 'product update' })

    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})
productRouter.delete('/', async (req, res) => {
    try {
        res.json({ message: 'product delete' })

    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})
//export Router
module.exports = productRouter