const express = require('express');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.json());

app.listen(4000,function(){
    console.log('listening to the port 4000')
});

app.get('/',function(request,response){
    response.send("Vanakam")
});

app.get('/python',function(request,response){
    response.send("python is a high level programming language");
});

/*app.post('/validate',function(request,response){
    if(request.body.user === 'suji' && request.body.password === '0987'){
        response.send('valid user');
    }else{
        response.send('Invalid user');
    }
});*/

app.post('/validate',function(request,response){
    if(request.body.user === 'suji' && request.body.password === '0987'){
        response.status(200).json({
            "message" : "valid user"
        });
    }else{
        response.status(401).json({
            "message" : "Invalid user"
        });
    }
});