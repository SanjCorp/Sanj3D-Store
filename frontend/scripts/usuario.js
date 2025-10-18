const form = document.getElementById("solicitud");

// Guardar datos en localStorage mientras se escribe
form.addEventListener("input", (e) => {
  localStorage.setItem(e.target.name, e.target.value);
});

// Rellenar formulario desde localStorage al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input, textarea").forEach(input => {
    if (localStorage.getItem(input.name)) {
      input.value = localStorage.getItem(input.name);
    }
  });
});

// Enviar datos al backend sin recargar página
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value;

  try {
    const res = await fetch("https://sanj3d-store.onrender.com/api/usuarios", {
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
      alert("✅ Usuario registrado correctamente");
      form.reset();
      localStorage.clear();
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  } catch (err) {
    alert(`❌ Error de conexión: ${err.message}`);
  }
});
