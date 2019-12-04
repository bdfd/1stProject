'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs= require('ejs')
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const indexRouter = require('./routes/index');
const functionsRouter = require('./routes/functions');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello World from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', indexRouter);
app.use('/functions', functionsRouter);


module.exports = app;
module.exports.handler = serverless(app);
