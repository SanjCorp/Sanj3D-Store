document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = {
      id: btn.dataset.id,         // ID interno (opcional)
      name: btn.dataset.product,  // Este es el que va al backend
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
