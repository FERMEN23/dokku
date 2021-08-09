import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();
const mongoose = require('mongoose');

const query ="mongodb://publicDB:713975d208bbae69c2f777673539be73"+
"@localhost:20017/publicDB"+
"retryWrites=true&w=majority";


//"mongodb://127.0.0.1:27017/public_database?authSource=public_database&gssapiServiceName=mongodb";

// Mongo Connection
const db = query;
mongoose.Promise = global.Promise;


//const uri = 'mongodb://127.0.0.1:27017/public_database?authSource=public_database&gssapiServiceName=mongodb';
//const options = {useNewUrlParser: true, useCreateIndex: true};

// Or using promises
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log("Error!" + error);
    }
    else{
      console.log("Conectado a la base de MongoDb")
    }
  }
);
app.use('/api', require('./rutas/productos'));

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});


