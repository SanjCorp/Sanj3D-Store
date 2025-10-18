// Manejar Buy
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = {
      id: btn.dataset.id,          // <--- guardar ID
      name: btn.dataset.product,
      price: Number(btn.dataset.price),
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  });
});

// Ir al carrito
document.getElementById("view-cart").addEventListener("click", () => {
  window.location.href = "cart.html";
});
