const form = document.getElementById("solicitud");

form.addEventListener("input", (e) => {
  localStorage.setItem(e.target.name, e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input, textarea").forEach(input => {
    if (localStorage.getItem(input.name)) {
      input.value = localStorage.getItem(input.name);
    }
  });
});

// Este bloque ahora escucha el submit
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // ❌ Evita que se redirija o recargue la página

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value;

  try {
    const res = await fetch("https://sanj3d-store.onrender.com/api/usuarios", { // <--- tu nueva ruta
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
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  } catch (err) {
    alert(`❌ Error de conexión: ${err.message}`);
  }
});
