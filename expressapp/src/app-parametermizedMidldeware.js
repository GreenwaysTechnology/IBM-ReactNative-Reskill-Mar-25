const express = require('express')

const app = express()

//parametermized middleware
const myMiddleware = function (param) {
    return function (req, res, next) {
        //write middleware logic with parameter
        console.log(`Got ${param}`)
        next()
    }
}
//register middleware
app.use(myMiddleware('hello'))

app.get('/', (req, res) => {
    res.end('Home')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})