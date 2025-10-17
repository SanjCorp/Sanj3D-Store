/* form.js - handle prefilling from product param, localStorage, and send to backend */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('solicitud');
  const params = new URLSearchParams(location.search);
  const product = params.get('producto');

  // Prefill message if producto param exists
  if (product) {
    const msg = document.getElementById('mensaje');
    if (msg) msg.value = `I request information and a quote for: ${product}\n`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!form.checkValidity()) {
      alert('Please fill in the required fields.');
      return;
    }

    // Prepare data object
    const data = {
      name: form.nombre.value,
      email: form.email.value,
      type: form.tipo.value,
      message: form.mensaje.value,
      date: new Date().toISOString()
    };

    // Save last request in localStorage
    localStorage.setItem('lastRequest', JSON.stringify(data));

    try {
      // Send POST request to backend
      const res = await fetch('https://sanj3d-store.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('Request submitted successfully!');
        form.reset();
      } else {
        const errData = await res.json();
        alert('Error: ' + (errData.message || 'Something went wrong'));
      }
    } catch (err) {
      console.error(err);
      alert('Network error, please try again later.');
    }
  });
});
