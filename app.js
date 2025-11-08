const express = require('express')
const app = express()

app.set('view engine','ejs')


app.get('/',(req,res) =>{
    const name = "Dirag Kasula"
    const address = "Bhaktapur"
    res.render('home.ejs', {data:name,address})
})
app.get('/about',(req,res) =>{
    res.render('about.ejs')
})

app.listen(3000,()=>{
    console.log("Project has started in port 3000.")
})