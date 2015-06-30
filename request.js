var koa = require('koa');
var app = koa();


// app.name optionally give your application a name
// app.env defaulting to the NODE_ENV or "development"
// app.proxy when true proxy header fields will be trusted
// app.subdomainOffset offset of .subdomains to ignore [2]


// If an error in the req/res cycle and it is not possible to respond to the client, the Context instance is also passed:

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});


// A Koa Context encapsulates node's request and response objects into a single object which provides many helpful methods for writing web applications and APIs.
app.use(function *(){
  this; // is the Context
  this.request; // is a koa Request
  this.response; // is a koa Response
  this.body = 'request.js';

  for(var member in this.response){
    if(typeof this.response[member] !== 'function'){
      console.log(member + ' = ', this.response[member]);
    }
  }

  // ctx.state
  // The recommended namespace for passing information through middleware and to your frontend views.
  // this.state.user = yield User.find(id);
  //
});

app.listen(3000);
