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




// Exportamos la configuración de express app
module.exports = router;