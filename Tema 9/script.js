        // Toggle contraseña
        const togglePassword = document.querySelector('#togglePassword');
        const password = document.getElementById("password");
        togglePassword.addEventListener('click', function () {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });

        // Leer cookie al cargar la página
        window.addEventListener("load", function () {
            const cookies = document.cookie.split(";").reduce((acc, cookie) => {
                const [name, value] = cookie.split("=");
                acc[name.trim()] = value ? value.trim() : "";
                return acc;
            }, {});

            if (cookies.usuario) {
                const nombre = decodeURIComponent(cookies.usuario);
                alert("Bienvenido de nuevo, " + nombre);
            }
        });

        // Funciones de validación
        function setValid(elemento, msgElemento, mensaje) {
            elemento.classList.add("is-valid");
            elemento.classList.remove("is-invalid");
            msgElemento.textContent = mensaje;
            msgElemento.classList.remove("text-danger");
            msgElemento.classList.add("text-success");
        }

        function setInvalid(elemento, msgElemento, mensaje) {
            elemento.classList.add("is-invalid");
            elemento.classList.remove("is-valid");
            msgElemento.textContent = mensaje;
            msgElemento.classList.remove("text-success");
            msgElemento.classList.add("text-danger");
        }

        function mensajeAyuda(campo) {
            const mensaje = {
                name: "Solo caracteres Alfabéticos",
                password: `• Al menos una letra mayúscula \n• Al menos un número \n• Al menos un símbolo !@#$%^&* \n• Mínimo 8 caracteres`,
                email: "Formato ejemplo aaa000@alu.medac.es",
                edad: "Edad mínima 16 años y máxima 99 años"
            };
            document.getElementById(campo + "Help").innerHTML = mensaje[campo];
        }

        function ocultarAyuda(campo) {
            document.getElementById(campo + "Help").innerHTML = "";
        }

        const regexName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        const regexEdad = /^(1[6-9]|[2-9]\d)$/;

        function validarCampo(input, regex, msgElemento) {
            const value = input.value.trim();
            if (value === "") {
                input.classList.remove("is-valid", "is-invalid");
                msgElemento.textContent = "";
                return false;
            }

            const ok = regex.test(value);
            if (ok) {
                setValid(input, msgElemento, "Correcto");
                return true;
            } else {
                setInvalid(input, msgElemento, "Mensaje incorrecto");
                return false;
            }
        }

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const edad = document.getElementById("edad");

        const nameHelp = document.getElementById("nameHelp2");
        const emailHelp = document.getElementById("emailHelp2");
        const passwordHelp = document.getElementById("passwordHelp2");
        const edadHelp = document.getElementById("edadHelp2");

        name.addEventListener("input", () => validarCampo(name, regexName, nameHelp));
        email.addEventListener("input", () => validarCampo(email, regexEmail, emailHelp));
        passwordInput.addEventListener("input", () => validarCampo(passwordInput, regexPassword, passwordHelp));
        edad.addEventListener("input", () => validarCampo(edad, regexEdad, edadHelp));

        // Crear cookie "usuario"
        function setCookie(value, days) {
            const d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + d.toUTCString();
            document.cookie = "usuario=" + encodeURIComponent(value) + ";" + expires + ";path=/";
            console.log("Cookie creada: " + document.cookie);
        }

        // Eliminar cookie "usuario"
        function eliminarCookie() {
            document.cookie = "usuario=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
            alert("Cookie Eliminada");
            console.log("Cookies actuales: " + document.cookie);
        }

        // Manejar envío de formulario
        document.querySelector("form").addEventListener("submit", function (e) {
            e.preventDefault();

            const allOk =
                validarCampo(name, regexName, nameHelp) &&
                validarCampo(email, regexEmail, emailHelp) &&
                validarCampo(passwordInput, regexPassword, passwordHelp) &&
                validarCampo(edad, regexEdad, edadHelp);

            if (allOk) {
                setCookie(name.value, 7);
                alert("Formulario válido (simulado)");
            } else {
                alert("Hay errores. Revisa los campos.");
            }
        });