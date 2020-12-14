const express = require('express')
const app = express()
const port = 3000


app.get('/' , (req , res) => {
    console.log(" Homepage ");    
    res.send("Hello world")
})
app.get('/about' , (req , res) => {
    console.log(" welcome about page ");    
    res.send("welcom about")
})
app.get('/contact' , (req , res) => {
    console.log(" thank u for using contact ");    
    res.send("ph#0000000")
})
app.listen(port, () => {   
    console.log(`Example app listening on port ${port}!`)
})