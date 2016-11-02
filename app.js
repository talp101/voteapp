var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var compress = require('compression');

var routes = require('./routes/index');

var model = require('./model/model');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(compress());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.set('port', (process.env.PORT || 5000));
var server = http.createServer(app).listen('0.0.0.0',app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

// Initialize socket.io
var io = require('socket.io').listen(server);
io.on('connection', function(socket){
    socket.on('fetchData', function(){
        socket.emit('data', model.questions);
    });
    socket.on('voteUp', function(voteOption, callback){
        model.questions[voteOption.questionId-1].options[voteOption.id-1].votes++;
        io.emit('data', model.questions);
    })
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




