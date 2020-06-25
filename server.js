const express = require('express')
const nunjucks = require('nunjucks')

const server = express();

server.set('view engine', 'njk')


nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.use(express.static('public'))


server.get('/', (req, res) => {
    res.render('index')
})

server.get('/about', (req, res) => {
    res.render('about')
})

server.get('/recipes', (req, res) => {
    res.render('recipes')
})

server.listen(3000, (req, res) => {
    console.log("Server running at port 3000")
})



