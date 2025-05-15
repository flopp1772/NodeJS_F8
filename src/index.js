const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes/index.js');
const db = require('./config/db')

//Connect to db
db.connect();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//Route init
route(app);

// console.log('PATH: ', path.join(__dirname, 'resources/view'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});