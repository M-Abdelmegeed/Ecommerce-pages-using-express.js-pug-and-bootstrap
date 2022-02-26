const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views','../views');
app.get('/services', function(req, res){
    res.render('services')
 });
app.listen(4000)