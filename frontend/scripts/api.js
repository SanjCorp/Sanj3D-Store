// 🌐 Base URL de la API en Render
const API_BASE_URL = "https://sanj3d-store.onrender.com/api";

// ✅ Obtener todos los productos desde MongoDB
export async function getProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error("Error fetching products");
    return await response.json();
  } catch (error) {
    console.error("❌ Error loading products:", error);
    return [];
  }
}

// ✅ Agregar un nuevo producto (solo si quieres hacerlo desde el frontend)
export async function addProduct(productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (!response.ok) throw new Error("Error adding product");
    return await response.json();
  } catch (error) {
    console.error("❌ Error adding product:", error);
  }
}

// ✅ Enviar una orden (carrito)
export async function createOrder(orderData) {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) throw new Error("Error creating order");
    return await response.json();
  } catch (error) {
    console.error("❌ Error creating order:", error);
  }
}

// ✅ Enviar una cotización personalizada (para archivos STL)
export async function sendCustomQuote(quoteData) {
  try {
    const response = await fetch(`${API_BASE_URL}/custom-quote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quoteData),
    });

    if (!response.ok) throw new Error("Error sending custom quote");
    return await response.json();
  } catch (error) {
    console.error("❌ Error sending custom quote:", error);
  }
}
