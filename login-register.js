const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Función para registrar un nuevo usuario
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Guardar el usuario y la contraseña en LocalStorage
    localStorage.setItem(username, password);
    alert('Usuario registrado con éxito!');
});

// Función para iniciar sesión
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Verificar si el usuario y la contraseña coinciden con los almacenados en LocalStorage
    if (localStorage.getItem(username) === password) {
        alert('Inicio de sesión exitoso!');
        // Redireccionar al usuario a la página principal
        window.location.href = 'index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
