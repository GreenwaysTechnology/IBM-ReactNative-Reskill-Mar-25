const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors());

app.use('/api/users', require('./routers/user.router'))

app.get('/', (req, res) => {
    res.end('Home')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})