// server.js o app.js
const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/Order'); // tu modelo de pedidos
const cors = require('cors');

const app = express();
app.use(cors()); // para poder ver la API desde el navegador
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// GET todos los pedidos - endpoint seguro
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find(); // trae todos los pedidos
    res.status(200).json(orders); // devuelve JSON directo
  } catch (err) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

// POST para crear pedidos
app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: 'Error creating order' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
