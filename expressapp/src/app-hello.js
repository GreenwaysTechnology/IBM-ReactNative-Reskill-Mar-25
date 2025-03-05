const express = require('express')

//create application object
const app = express()

//HTTP api methods mapping

app.get('/api/hello', (req, res) => {
    res.end('get-hello')
})
//post
app.post('/api/hello', (req, res) => {
    res.end('post-hello')
})
app.put('/api/hello', (req, res) => {
    res.end('put-hello')
})
app.delete('/api/hello', (req, res) => {
    res.end('delete-hello')
})


//start server
app.listen(3000, () => {
    console.log('Express server is running')
})