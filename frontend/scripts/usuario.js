const form = document.getElementById('usuarioForm');
const list = document.getElementById('list');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData = {
        name: form.name.value,
        email: form.email.value,
        projectType: form.projectType.value,
        requestDetails: form.requestDetails.value
    };

    try {
        const response = await fetch('/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        addUserToList(result);
        form.reset();
    } catch (error) {
        console.error('Error:', error);
    }
});

function addUserToList(user) {
    const li = document.createElement('li');
    li.textContent = `${user.name} - ${user.email} - ${user.projectType} - ${user.requestDetails}`;
    list.appendChild(li);
}

// Fetch initial users
async function fetchUsers() {
    const response = await fetch('/api/usuarios');
    const usuarios = await response.json();
    usuarios.forEach(addUserToList);
}

fetchUsers();
