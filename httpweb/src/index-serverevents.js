const http = require('node:http')

//create server
const server = http.createServer((req, res) => {
    res.end('Hello!')
})

//server events
server.on('request', (req, res) => {
    console.log(`The Request is received on ${new Date()} URL is ${req.url} ${req.method}`)
})

//start the http server
server.listen(3000, () => {
    console.log('Server is Up and Running!')
});