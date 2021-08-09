import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Products = new Schema({
  Name: {type: String, required: [true, 'Nombre obligatorio']},
  Category: {type: String,required: [true, 'Categoria obligatoria']},
  Provider: String,
  Price: {type: double,required: [true, 'Precio obligatorio']},
  Stock: {type: double,default:1}
});

// Convertir a modelo
const products = mongoose.model('products', Products);

export default products;