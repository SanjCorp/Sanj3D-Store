const form = document.getElementById("solicitud");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const tipo = document.getElementById("tipo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  try {
    const res = await fetch("https://sanj3d-store.onrender.com/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        email,
        tipo,
        mensaje
      }),
    });

    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

    const data = await res.json();
    alert("✅ Usuario registrado correctamente");
    form.reset();
    localStorage.clear();
  } catch (err) {
    alert(`❌ Error al conectar con la API: ${err.message}`);
  }
});
