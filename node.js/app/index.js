/*const calc = require('./calc')

const numbersToAdd = [
    3,
    4,
    10,
    2
]

const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`)
*/




/*const _ = require('lodash')

_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3});
*/




/*const http =require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if(err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})*/



/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (request,response) => {
    response.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})*/


const path = require('path')
const express = require('express')
const exphbs= require('express-handlebars')

app.engine('/hbs', exphbs({
    defaultLayout: "main',
    extname: '.hbs',
    layoutsDir: path.join(_dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(_dirname, 'views'))
