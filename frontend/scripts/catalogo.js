// Modal logic
const modal = document.getElementById("buy-modal");
const closeModal = document.getElementById("modal-close");
const buyForm = document.getElementById("buy-form");
const productNameInput = document.getElementById("product-name");

// Abrir modal solo al presionar Buy
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const productName = btn.dataset.product;
    productNameInput.value = productName;
    modal.style.display = "block";
  });
});

// Cerrar modal
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Enviar datos al API orders
buyForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    name: buyForm.nombre.value,
    email: buyForm.email.value,
    product: buyForm.producto.value,
    quantity: parseInt(buyForm.cantidad.value),
  };

  try {
    const res = await fetch("https://sanj3d-store.onrender.com/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (res.ok) {
      alert("✅ Order saved successfully!");
      buyForm.reset();
      modal.style.display = "none";
    } else {
      alert(`❌ Error: ${result.error}`);
    }
  } catch (err) {
    alert(`❌ Connection error: ${err.message}`);
  }
});
