document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("solicitud");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      tipo: document.getElementById("tipo").value,
      mensaje: document.getElementById("mensaje").value,
    };

    try {
      const response = await fetch("https://sanj3d-store.onrender.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Server error");
      }

      alert("✅ Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Network error, please try again later.");
    }
  });
});
