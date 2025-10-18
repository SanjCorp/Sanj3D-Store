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

    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

    const data = await res.json();
    alert("✅ Registro guardado correctamente en la base de datos");
    form.reset();
    localStorage.clear();
  } catch (err) {
    alert(`❌ Error al conectar con la API: ${err.message}`);
  }
});
