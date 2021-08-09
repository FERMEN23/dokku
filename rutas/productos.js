import express from 'express';
const router = express.Router();

// importar el modelo nota
import products from '../models/productos';

// Agregar una nota
router.post('/addProduct', async(req, res) => {
  const body = req.body;  
  try {
    const ProductDB = await products.create(body);
    res.status(200).json(ProductDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos
router.get('/Productos', async(req, res) => {
    try {
      const notaDb = await products.find();
      res.json(notaDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

// Exportamos la configuración de express app
module.exports = router