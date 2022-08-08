const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    // res.send('Hello World');
    res.sendFile(__dirname + '/index.html');
});

//bmiCaculator route
app.get('/bmiCalculator', function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is : " + result);
});

//post for bmi
app.post('/bmiCalculator', (req,res)=>{
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/Math.pow(height,2);

    res.send("Your bmi is " + Math.ceil(bmi));
});

app.listen(3000, ()=>{
    console.log("The server has started on port 3000.");
});