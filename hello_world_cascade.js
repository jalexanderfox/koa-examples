var koa = require('koa');
var app = koa();

// x-response-time

app.use(function *(next){
  var start = new Date;
  console.log('x-response-time: before yield');
  yield next;
  console.log('x-response-time: after yield');
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  console.log('logger: before yield');
  yield next;
  console.log('logger: after yield');
  var ms = new Date - start;
  var pattern = ' %s | %s - %s ms';
  console.log(pattern, 'this.method', 'this.url', 'ms');
  console.log(pattern, this.method, this.url, ms);
});

// response

app.use(function *(){
	console.log('response: before yield');
  this.body = 'Hello World';
  console.log('Hello World');
  console.log('response: after yield');
});

app.listen(3000);
