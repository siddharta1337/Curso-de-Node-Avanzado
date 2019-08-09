var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");

const fileInfo = promisify(stat);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/video-static' , (req, res, next) => { 

  const fileName = __dirname + "/public/video/video.mp4";

  res.type("video/mp4");
  res.sendFile(fileName);

})

app.use("/video-stream",  (req, res, next) => {

  const fileName = "./public/video/video.mp4";

  res.writeHead(200, {
    "Content-Type": "video/mp4"
  });

  createReadStream(fileName).pipe(res);

});

app.use("/video-rango", async (req, res, next) => {

  const fileName = "./public/video/video.mp4";
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;

  if( range){

    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;

    res.writeHead(206, {
      "Content-Type": "video/mp4",
      "Content-Length": end - start + 1,
      "Accept-Ranges": "bytes",
      "Content-Range": `bytes ${start}-${end}/${size}`
    });

    createReadStream(fileName, { start, end }).pipe(res);

  }else{
    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": size
    });
  
    createReadStream(fileName).pipe(res);
  }

});






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
