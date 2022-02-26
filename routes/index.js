var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const app = express();
const port =4000;
const date = new Date()
const year = String(date.getFullYear())
const time = date.getHours();
const weekday = date.getDay() // 0 = Sunday, 5 = Friday, 6=Saturday
app.set('view engine', 'pug');
app.set('views','../views');
app.use(logger)
app.get('/contact-us', function(req, res){
  res.status(200).render('contact')
});
app.get('/services', function(req, res){
  res.status(200).render('services')
});
app.get('*', function(req, res){
  res.render('home');
});

function logger(req, res, next){
  console.log(`Weekday: ${weekday}, Hour: ${time}`);
  if(weekday == (0 || 6 ) || time<9 || time>17){
    res.render('unavailable');
    console.log(req.url);
  }else{
  next()
  }
}
app.use(express.static('public'));

app.listen(port, ()=>{
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s',
      port);
});
