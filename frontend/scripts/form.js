const form = document.getElementById("solicitud");

// ✅ Guardar cada campo en LocalStorage al escribir
form.addEventListener("input", (e) => {
  localStorage.setItem(e.target.name, e.target.value);
});

// ✅ Cargar valores almacenados al iniciar
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input, textarea, select").forEach(input => {
    if (localStorage.getItem(input.name)) {
      input.value = localStorage.getItem(input.name);
    }
  });
});

// ✅ Enviar datos a la API (registrar producto o solicitud)
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
      alert("✅ Datos enviados correctamente a la API");
      form.reset();
      localStorage.clear();
    } else {
      alert(`❌ Error del servidor: ${data.error || 'Intenta de nuevo'}`);
    }
  } catch (err) {
    alert(`❌ Error de conexión: ${err.message}`);
  }
});
