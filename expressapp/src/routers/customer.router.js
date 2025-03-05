const express = require('express')
const { findAll } = require('../services/customer.service')
//create router
const customerRouter = express.Router()

//expose api
customerRouter.get('/', async (req, res) => {
    try {
        const customers = await findAll()
        res.json(customers)
    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})
//customers/filter??city=chennai&state=TN
customerRouter.get('/filter', async (req, res) => {
    try {
        const params = req.query
        console.log(params)
        return res.status(200).json({ message: params })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
})

//path param
//customers/1
customerRouter.get('/:id', async (req, res) => {
    try {
       const id = req.params.id 
       res.end(id)
    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})


customerRouter.post('/', async (req, res) => {
    try {
        res.json({message:'save'})
    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})
customerRouter.put('/', async (req, res) => {
    try {
        res.json({message:'update'})

    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})
customerRouter.delete('/', async (req, res) => {
    try {
        res.json({message:'delete'})

    }
    catch (err) {
        res.status(404).json({ err: err })
    }
})
//export Router
module.exports = customerRouter