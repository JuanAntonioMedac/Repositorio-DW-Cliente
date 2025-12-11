var emailCorrecto = 'test@medac.es';
var passCorrecto = '1234';

function validarLogin(email, pass) {
    return new Promise(function (resolve, reject) {
        var tiempo = Math.random() * 1000 + 1000;

        setTimeout(function () {
            if (email == emailCorrecto && pass == passCorrecto) {
                resolve({ mensaje: 'Login correcto. Bienvenido.' });
            } else {
                reject({ mensaje: 'Credenciales incorrectas.' });
            }
        }, tiempo);
    });
}

function mostrarAlerta(mensaje, tipo) {
    var contenedor = document.getElementById('alertContainer');
    contenedor.innerHTML = '';

    var alerta = document.createElement('div');
    alerta.className = 'alert alert-' + tipo + ' alert-dismissible fade show';
    alerta.role = 'alert';
    alerta.innerHTML = mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';

    contenedor.appendChild(alerta);

    setTimeout(function () {
        alerta.classList.remove('show');
        setTimeout(function () {
            alerta.remove();
        }, 150);
    }, 5000);
}

function validarCampos(email, pass) {
    if (email == '' || email.trim() == '') {
        mostrarAlerta('El campo email no puede estar vacío.', 'danger');
        return false;
    }
    if (pass == '' || pass.trim() == '') {
        mostrarAlerta('El campo contraseña no puede estar vacío.', 'danger');
        return false;
    }
    return true;
}

var formulario = document.getElementById('loginForm');
var boton = document.getElementById('submitBtn');
var spinner = document.getElementById('loadingSpinner');
var inputEmail = document.getElementById('email');
var inputPass = document.getElementById('password');


formulario.addEventListener('submit', async function (e) {
    e.preventDefault();

    var email = inputEmail.value.trim();
    var pass = inputPass.value;

    if (!validarCampos(email, pass)) {
        return;
    }

    boton.disabled = true;
    spinner.classList.remove('d-none');

    try {
        var respuesta = await validarLogin(email, pass);
        mostrarAlerta(respuesta.mensaje, 'success');
        formulario.reset();
    } catch (error) {
        mostrarAlerta(error.mensaje, 'danger');
    } finally {
        spinner.classList.add('d-none');
        boton.disabled = false;
    }
});
