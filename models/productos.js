import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Productos = new Schema({
  Name: {type: String, required: [true, 'Nombre obligatorio']},
  Category: {type: String,required: [true, 'Categoria obligatoria']},
  Provider: {type:String, default:""},
  Price: {type: Number,required: [true, 'Precio obligatorio']},
  Stock: {type: Number,default:1}
});

// Convertir a modelo
const Products=mongoose.model('Products',Productos);

export default Products;