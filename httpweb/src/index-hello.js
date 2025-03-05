const http = require('node:http')

//create server
const server = http.createServer((req, res) => {
    res.write('Hello')
    res.end()
})
//start the http server
server.listen(3000, () => {
    console.log('Server is Up and Running!')
});