const http = require('node:http')
const { findAll } = require('./services/user.service')

//create server
const server = http.createServer((req, res) => {
    findAll().then(users => {
        const json = JSON.stringify(users)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(json)
    }).catch(err => {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        const errJson = JSON.stringify({ err: err })
        res.end(errJson)
    });
})

//server events
server.on('request', (req, res) => {
    console.log(`The Request is received on ${new Date()} URL is ${req.url} ${req.method}`)
})

//start the http server
server.listen(3000, () => {
    console.log('Server is Up and Running!')
});