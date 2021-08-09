import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();
const mongoose = require('mongoose');


// Mongo URI
const query ="mongodb://ProjectDB:319f674a65e8889a3fc484d90efb8f58@dokku-mongo-ProjectDB:27017/ProjectDB";

// Mongo Connection
const db = query;
mongoose.Promise = global.Promise;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log("Error!" + error);
    }
  }
);



//const uri = "mongodb://ProjectDB:319f674a65e8889a3fc484d90efb8f58@dokku-mongo-ProjectDB:20012/ProjectDB";
//const options = {useNewUrlParser: true, useCreateIndex: true};

// Or using promises
//mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
 // () => { console.log('Conectado a mongoDB') },
  /** handle initial connection error */
 // err => { console.log(err) }
//);


//mongoose.connect(
 // db,
 // { useNewUrlParser: true, useUnifiedTopology: true },
 // function (error) {
  //  if (error) {
   //   console.log("Error!" + error);
   // }
   // else{
    //  console.log("Conectado a la base de MongoDb")
    //}
 // }
//);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./rutas/productos'));
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


