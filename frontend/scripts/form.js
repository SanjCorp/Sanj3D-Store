const form = document.getElementById("solicitud");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value;

  try {
    // Cambié a ruta relativa para evitar recibir HTML en lugar de JSON
    const res = await fetch("/api/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, tipo, mensaje })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Solicitud enviada correctamente ✅");
      form.reset();
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (err) {
    alert(`Error de conexión: ${err.message}`);
  }
});
