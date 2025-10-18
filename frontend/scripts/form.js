// frontend/scripts/form.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#solicitud");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.nombre.value.trim(),
      email: form.email.value.trim(),
      type: form.tipo.value.trim(),
      message: form.mensaje.value.trim(),
    };

    try {
      const response = await fetch("https://sanj3d-store.onrender.com/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Server responded with ${response.status}: ${errText}`);
      }

      alert("Mensaje enviado con éxito.");
      form.reset();
    } catch (error) {
      console.error("❌ Error al enviar el formulario:", error);
      alert("Network error, please try again later.");
    }
  });
});
