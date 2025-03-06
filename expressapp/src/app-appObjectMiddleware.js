const express = require('express')

const app = express()

//global middleware: gets executed for any url and any http method
app.use((req, res, next) => {
    //middleware logic
    console.log('global middleware is called')
    //move to next middleware or request handler
    next()
})

//specific url : gets executed for specific url

app.use('/api/hai', (req, res, next) => {
    //middleware logic
    console.log(`${req.method} ${req.baseUrl} middleware is called`)
    //move to next middleware or request handler
    next()
})

//specific url and spefic method
app.get('/api/hai', (req, res, next) => {
    //middleware logic
    console.log(`${req.method} ${req.baseUrl} middleware is called`)
    //move to next middleware or request handler
    next()
})

app.get('/', (req, res) => {
    res.end('Home')
})
app.get('/api/hello', (req, res) => {
    res.end('hello')
})

app.get('/api/hai', (req, res) => {
    res.end('hai')
})

app.post('/api/hai', (req, res) => {
    res.end('hai post')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})