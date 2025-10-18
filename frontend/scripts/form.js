const form = document.getElementById("solicitud");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value;

  try {
    const res = await fetch("https://sanj3d-store.onrender.com/api/productsdepositaro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, tipo, mensaje })
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Solicitud enviada correctamente al depósito de productos");
      form.reset();
    } else {
      alert(`❌ Error: ${data.error || "No se pudo enviar la solicitud"}`);
    }
  } catch (err) {
    alert(`❌ Error de conexión: ${err.message}`);
  }
});
