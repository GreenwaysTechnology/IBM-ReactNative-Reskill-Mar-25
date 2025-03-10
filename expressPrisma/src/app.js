const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use('/api/users', require('./routers/user.router'))

app.get('/', (req, res) => {
    res.end('Home')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})