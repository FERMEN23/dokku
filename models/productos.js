import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
  Name: {type: String, required: [true, 'Nombre obligatorio']},
  Category: {type: String, required: [true, 'Nombre obligatorio']},
  Provider:{type: String, default :""},
  Price:{type: Number, required: [true, 'Nombre obligatorio']},
  Stock: {type: Number, default: 1}
});

// Convertir a modelo
const productos = mongoose.model('productos', ProductoSchema);

export default productos;