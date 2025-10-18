document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const projectType = document.getElementById("projectType").value;
    const requestDetails = document.getElementById("requestDetails").value;

    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, requestDetails })
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        form.reset();
      } else {
        alert("❌ Error: " + result.error);
      }
    } catch (error) {
      alert("❌ Error al enviar formulario: " + error.message);
    }
  });
});
