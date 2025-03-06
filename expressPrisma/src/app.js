const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/api/users', require('./routers/user.router'))

app.get('/', (req, res) => {
    res.end('Home')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})