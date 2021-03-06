const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());


mongoose.connect('mongodb://localhost/formularios')
  .then(db => console.log('Conectado a Mongodb'))
  .catch(err => console.log(err));
  

const indexRoutes = require('./routes/router');
const indexRoutes2 = require('./routes/router2');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRoutes, indexRoutes2);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});



