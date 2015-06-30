var koa = require('koa');
var app = koa();

app.use(function *(){ // yay, generator!
  this.body = 'Hello World';
});

app.listen(3000);