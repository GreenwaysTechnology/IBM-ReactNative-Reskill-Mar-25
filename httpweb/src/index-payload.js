const http = require('node:http')
const { save } = require('./services/user.service')


const server = http.createServer((req, res) => {
    try {
        let data = ''
        req.on('data', (chunk) => {
            //console.log(chunk)
            data += chunk
        })
        req.on('end', async () => {
            //res.writeHead(200, { 'Content-Type': 'application/json' })
            const result = await save(data)
            res.end(result)
        })

    }
    catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        const errJson = JSON.stringify({ err: err })
        res.end(errJson)
    }
})

//server events
server.on('request', (req, res) => {
    console.log(`The Request is received on ${new Date()} URL is ${req.url} ${req.method}`)
})

//start the http server
server.listen(3000, () => {
    console.log('Server is Up and Running!')
});