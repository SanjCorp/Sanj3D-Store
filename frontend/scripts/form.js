document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("solicitud");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const tipo = form.tipo.value;
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, tipo, mensaje }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      alert("✅ Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error("❌ Error:", err);
      alert("⚠️ Network error, please try again later.");
    }
  });
});
