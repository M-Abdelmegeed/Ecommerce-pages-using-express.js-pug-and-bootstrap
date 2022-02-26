const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views','../views');
app.get('/contact-us', function(req, res){
    res.render('contact')
 });
app.listen(4000)