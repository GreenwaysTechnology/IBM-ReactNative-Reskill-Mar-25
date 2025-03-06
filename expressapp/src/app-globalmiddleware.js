const express = require('express')

const app = express()

//global middleware: gets executed for any url and any http method
app.use((req, res, next) => {
    //middleware logic
    console.log('global middleware is called')
    //move to next middleware or request handler
    next()
})

app.get('/', (req, res) => {
    res.end('Home')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})