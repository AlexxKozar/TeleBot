import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postsRouter from './routes/posts.router';

const app = express();

dotenv.config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Origin, Content-type, X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


app.use('/api/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});





const port = process.env.PORT || process.env.APP_PORT;

// Connect to database
mongoose.connect(`${process.env.MONGODB_URI_LOCAL}/${process.env.DB_DATABASE}`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;  // Default promise library is deprecated
mongoose.connection
  .once('connected', () => console.log(`Connected to Database on ${process.env.MONGODB_URI_LOCAL}`))
  .on('error', () => console.error.bind(console, 'connection error:'));



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
app.listen(port, () => {
  console.log(`App Server Listening at ${port}`);
});


module.exports = app;
