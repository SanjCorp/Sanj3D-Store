document.getElementById("solicitud").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    type: document.getElementById("tipo").value,
    message: document.getElementById("mensaje").value,
  };

  try {
    const res = await fetch("https://sanj3d-store.onrender.com/api/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Network response was not ok");
    alert("Request sent successfully!");
  } catch (err) {
    console.error(err);
    alert("Network error, please try again later.");
  }
});
