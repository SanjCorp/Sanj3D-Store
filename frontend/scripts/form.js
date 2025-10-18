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
