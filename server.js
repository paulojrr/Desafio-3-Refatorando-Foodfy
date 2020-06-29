const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express();

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    watch: true,
})

server.use(express.static('public'))

server.get('/', (req, res) => {
    res.render('index', { recipes })
})

server.get('/about', (req, res) => {
    res.render('about')
})

server.get('/recipes', (req, res) => {
    res.render('recipes', { recipes })
})

server.get('/recipes/:index', (req, res) => {
    const recipeIndex = req.params.index;

    res.render('details', { receipts : recipes[recipeIndex] });
})

server.listen(3000, (req, res) => {
    console.log("Server running at port 3000")
})



