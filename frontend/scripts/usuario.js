document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("product-container");

  try {
    const response = await fetch("https://sanj3d-store.onrender.com/api/products");
    const products = await response.json();

    if (!Array.isArray(products)) {
      throw new Error("La API no devolvió un array válido");
    }

    products.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image || 'img/default.png'}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p><strong>Material:</strong> ${p.material || 'PLA'}</p>
        <p><strong>Descripción:</strong> ${p.description || p.details || 'Sin detalles'}</p>
        <p><strong>Precio:</strong> ${p.price ? p.price + ' Bs' : 'A consultar'}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar productos:", error);
    container.innerHTML = `<p style="color:red;">❌ No se pudieron cargar los productos.</p>`;
  }
});
