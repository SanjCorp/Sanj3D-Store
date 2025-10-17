document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('solicitud');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // evita el envío normal

    if (!form.checkValidity()) {
      alert('Please fill in all required fields.');
      return;
    }

    const data = {
      name: form.nombre.value,
      email: form.email.value,
      type: form.tipo.value,
      message: form.mensaje.value,
      date: new Date().toISOString()
    };

    try {
      const res = await fetch('https://sanj3d-store.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('Request submitted successfully!');
        form.reset();
      } else {
        alert('Error sending request. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error, please try again later.');
    }
  });
});
