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

    // 🔐 Solicitud a ReqRes
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json",
                 "x-api-key": "reqres-free-v1" 
                 },
        body: JSON.stringify({
            email: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            alert('¡Hola ' + username + '! Login exitoso. Token: ' + data.token);
            // Puedes guardar el token si quieres simular una sesión
            localStorage.setItem("token", data.token);
            window.location.href = "redes.html";
        } else {
            errorMessage.textContent = 'Credenciales inválidas o incompletas.';
        }
    })
    .catch(() => {
        errorMessage.textContent = 'Error de conexión con el servidor.';
    });
});








