const express = require('express')
const todoController = require('./controller/todoController')


const app = express()
const port = 3000

//set up tamplate engine
app.set('view engine', 'ejs')

//static files
app.use(express.static('./public'))

//fire controler
todoController(app)

//listen to port 
app.listen(port)
console.log(`you are listening to port ${port}`)