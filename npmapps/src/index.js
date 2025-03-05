const http = require('node:http')

const server = http.createServer((request, response) => {
    response.write('Hello How are you?')
    response.end()
})
server.listen(3000, () => {
    console.log('server is ready')
})