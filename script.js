document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (!username || !password) {
        errorMessage.textContent = 'Por favor, complete ambos campos.';
        return;
    }

    // Simulación de login exitoso (puedes agregar lógica real con backend)
    if (username === "admin" && password === "12345") {
        alert('¡hola ' + username + ', será redirigido a sus redes sociales!');
        //window.location.href = "redes.html";
    } else {
        errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
    }
});





