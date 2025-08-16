document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const usuarioValido = "admin";
    const contrasenaValida = "12345";

    if(usuario === usuarioValido && contrasena === contrasenaValida){
        window.location.href = "redes.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
