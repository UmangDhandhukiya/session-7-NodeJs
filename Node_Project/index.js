const express = require("express")

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use('/assets', (req,res,next) => {
    console.log(req.url);
 next()
}) //middleware use only after url /assets


app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/profile/:id', (req,res) => {
    // res.send('you req to see profile wit id of ' + req.params.id)
    const data = {name : "umang",hobbies:['play games', 'dance', 'singing']}
    res.render('profile' , {id : req.params.id, data : data})
})

app.listen(port)