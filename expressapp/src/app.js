const express = require('express')
// const customerRouter = require('./routers/customer.router')
//create application object
const app = express()

//connecting routers with application object
// app.use('/api/customers',customerRouter)
app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

app.get('/', (req, res) => {
    res.end('Home')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})