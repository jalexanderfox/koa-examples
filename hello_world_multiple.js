// Create and return an HTTP server, passing the given arguments to Server#listen(). These arguments are documented on nodejs.org. The following is a useless Koa application bound to port 3000:

// var koa = require('koa');
// var app = koa();
// app.listen(3000);
// The app.listen(...) method is simply sugar for the following:

// var http = require('http');
// var koa = require('koa');
// var app = koa();
// http.createServer(app.callback()).listen(3000);



var http = require('http');
var koa = require('koa');
var app = koa();
app.use(function *(){ // yay, generator!
  this.body = 'Hello World';
});

//This means you can spin up the same application as both HTTP and HTTPS or on multiple addresses:
http.createServer(app.callback()).listen(3000);
http.createServer(app.callback()).listen(3001);