document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('solicitud');
  const params = new URLSearchParams(location.search);
  const product = params.get('producto');

  if (product) {
    const msg = document.getElementById('mensaje');
    if (msg) msg.value = `I request information and a quote for: ${product}\n`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert('Please fill in the required fields.');
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
      const res = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error('Network response was not ok');

      alert('Request submitted successfully!');
      form.reset();
      localStorage.setItem('lastRequest', JSON.stringify(data));

    } catch (err) {
      console.error(err);
      alert('Network error, please try again later.');
    }
  });
});
