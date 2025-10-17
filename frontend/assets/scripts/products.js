const productsContainer = document.getElementById("products-container");

// Fetch products from backend
fetch("https://sanj3d-store.onrender.com/api/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product-card");
      div.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" width="200">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button class="info-btn">Info</button>
        <label>Quantity: <input type="number" class="qty" value="1" min="1"></label>
        <button class="add-cart-btn">Add to Cart</button>
      `;
      productsContainer.appendChild(div);

      // Info button
      div.querySelector(".info-btn").addEventListener("click", () => {
        alert(`${product.name}\n${product.description}`);
      });

      // Add to cart button
      div.querySelector(".add-cart-btn").addEventListener("click", () => {
        const qty = div.querySelector(".qty").value;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ ...product, quantity: qty });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart`);
      });
    });
  });

// Custom Quote Form
const customForm = document.getElementById("custom-quote-form");
customForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById("stl-file");
  const file = fileInput.files[0];

  // Simular subida de archivo, aquí necesitarías un servicio de storage real (Render no almacena archivos directamente)
  const fakeFileUrl = URL.createObjectURL(file);

  const quoteData = {
    name: document.getElementById("custom-name").value,
    email: document.getElementById("custom-email").value,
    phone: document.getElementById("custom-phone").value,
    urgent: document.getElementById("custom-urgent").checked,
    description: document.getElementById("custom-description").value,
    fileUrl: fakeFileUrl
  };

  const res = await fetch("https://sanj3d-store.onrender.com/api/products/custom-quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quoteData)
  });

  if(res.ok) {
    alert("Quote request submitted successfully!");
    customForm.reset();
  } else {
    alert("Error submitting quote.");
  }
});
