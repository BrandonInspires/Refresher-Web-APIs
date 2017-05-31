const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('homepage')
});

app.listen(3000);
