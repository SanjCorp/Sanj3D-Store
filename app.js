// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Para servir catalogo.html, cart.html, img/, css/, js/

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schemas
const orderSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  producto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// Rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/catalogo.html'); // catalogo como página principal
});

// API: Obtener todos los pedidos
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

// API: Crear un pedido
app.post('/api/orders', async (req, res) => {
  try {
    const { nombre, email, producto, cantidad, precio } = req.body;
    const order = new Order({ nombre, email, producto, cantidad, precio });
    await order.save();
    res.status(201).json({ message: 'Order created', order });
  } catch (err) {
    res.status(400).json({ error: 'Error creating order', details: err.message });
  }
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
