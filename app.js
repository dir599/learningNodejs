const express = require('express')
const app = express()

app.set('view engine','ejs')


app.get('/',(req,res) =>{
    
    res.render('home.ejs',)
})

app.get('/register',(req,res)=>{
    res.render('auth/register.ejs')
})

app.get('/login',(req,res)=>{
    res.render('auth/login.ejs')
})



app.use(express.static('public/css/'))

const Port = 3000
app.listen(Port ,()=>{
    console.log("Project has started in port"+ Port)
})