const form = document.getElementById("solicitud");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value;

  try {
    const res = await fetch("https://sanj3d-store.onrender.com/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        email: email,
        type: tipo,
        details: mensaje
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Producto registrado correctamente");
      form.reset();
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  } catch (err) {
    alert(`❌ Error de conexión: ${err.message}`);
  }
});
