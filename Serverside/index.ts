var express = require('express')
var cors = require('cors')
var fs = require('fs')
var app = express()
app.use(cors())
const port = 5000 
var integer = 0 

app.get('/', function (req, res){
    integer += 1 
    let w = integer.toString()
    console.log(w)
    res.send(w)  
}); 

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
});