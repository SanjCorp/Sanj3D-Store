const form = document.getElementById("solicitud");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value;

  try {
    const res = await fetch("/api/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, tipo, mensaje })
    });

    if (res.ok) {
      alert("Request submitted successfully!");
      form.reset();
    } else {
      alert("Error submitting request.");
    }
  } catch (err) {
    console.error(err);
    alert("Error submitting request.");
  }
});
