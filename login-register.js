// Listener para el formulario de registro
// Modificar la función de evento submit para el registro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    
    if (esContraseñaSegura(password)) {
        // Enviar datos al servidor para el registro
        fetch('register.php', {
            method: 'POST',
            body: new URLSearchParams(`username=${username}&password=${password}`)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Manejar la respuesta del servidor
        });
    } else {
        alert("La contraseña no es segura...");
    }
});


// Función para validar la seguridad de la contraseña
function esContraseñaSegura(password) {
    var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return re.test(password);
}

// Listener para el formulario de inicio de sesión
// Modificar la función de evento submit para el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Enviar datos al servidor para el inicio de sesión
    fetch('login.php', {
        method: 'POST',
        body: new URLSearchParams(`username=${username}&password=${password}`)
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Success") {
            window.location.href = 'dashboard.html';
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});


