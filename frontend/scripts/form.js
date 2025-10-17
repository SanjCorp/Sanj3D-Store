document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("solicitud");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.nombre.value,
      email: form.email.value,
      type: form.tipo.value,
      message: form.mensaje.value,
    };

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Request submitted successfully!");
        form.reset();
      } else {
        throw new Error("Failed to submit request");
      }
    } catch (err) {
      alert("Network error, please try again later.");
    }
  });
});
