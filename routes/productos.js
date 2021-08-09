import express from 'express';
const router = express.Router();

// importar el modelo nota
import productos from '../models/productos';
router.post('/nuevo', async(req, res) => {
    const body = req.body;  
    try {
      const notaDB = await productos.create(body);
      res.status(200).json(notaDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  router.get('/producto/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const notaDB = await productos.findOne({_id});
      res.json(notaDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/producto', async(req, res) => {
    try {
      const notaDb = await productos.find();
      res.json(notaDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });




// Exportamos la configuración de express app
module.exports = router;