const express = require('express');
const path = require('path');
var app =express();

var port = 3100;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function (req,res) {
  res.render('index');
});

app.get('/left_side',function () {
  console.log("왼쪽으로");
})
app.get('/right_side',function () {
  console.log("오른쪽으로");
})
app.get('/foward_side',function () {
  console.log("앞으로");
})
app.get('/back_side',function () {
  console.log("뒤로");
})
app.get('/stop',function () {
  console.log("정지");
})
app.listen(port,function () {
  console.log('listening at port %d',port);
})
