
const express = require('express');
const hbs = require('hbs');

var app = express();
var path = require('path'); //built in path module, used to resolve paths of relative files

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

app.get('/',(request,response)=>{
    response.render('home.hbs',{
        pageTitle:'Bus Information System Dashboard',
        welcomeMessage:'Welcome to RURA! All bus information here!',
        currentYear: new Date().getFullYear()
    });
});

app.get('/companies',(request, response)=>{
    response.render('companies.hbs',{
        pageTitle: 'Bus Information System Dashboard',
        listMessage:'Here are all the companies working with RURA',
        currentYear: new Date().getFullYear()
    });

});


app.get('/about',(request, response)=>{
    response.render('about.hbs',{
        pageTitle:'Bus Information System Dashboard',
        currentYear: new Date().getFullYear()
    });
});

app.get('/login',(request,response)=>{
    response.render('login.hbs',{
        pageTitle:'Bus Information System Dashboard',
        currentYear: new Date().getFullYear()

    })
});

app.get('/signUp',(request,response)=>{
    response.render('signUp.hbs',{
        pageTitle: 'Bus Information System Dashboard',
        currentYear:new Date().getFullYear()
    });
});

//tacking a car nav 
app.get('/track-a-car',(request,response)=>{
    response.render('track-a-car.hbs',{
        pageTitle: 'Bus Information System Dashboard',
        currentYear: new Date().getFullYear()
    });
});



app.get('/bad',(request,response)=>{
    response.send({
        errorMessage:'Unable to handle request'
    });
});


app.listen(3000,()=>{
    console.log("Server is up running on port 3000")
});