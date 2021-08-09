import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();
const mongoose = require('mongoose');

const uri = "mongodb://ProjectDB:319f674a65e8889a3fc484d90efb8f58" +
"@fernanda-Inspiron-15-3567:20012/ProjectDB?" +
"retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useCreateIndex: true};

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/nota'));
// Rutas
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3001);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});