const submitFunction = (event) => {
    if (!validarFormulario()){
        event.preventDefault();
    }else{
        event.preventDefault();

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )

    }
};

document.getElementById('formulario').addEventListener('submit', submitFunction); // Escucha el envío del formulario

function validarFormulario() {
    let camposTexto = document.querySelectorAll('input[type="text"]'); // se crea un array con todos los input tipo text
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        // selecciona error + id con la primera en mayúscula
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toLocaleUpperCase() + campo.id.slice(1));

        if (campo.value.length == 0) {
            mostrarError(errorCampo, '¡Este campo es obligatorio!');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    //validación del campo email

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // este regex valida que el formato del email sea válido
        ocultarError(errorEmail)
    } else {
        mostrarError(errorEmail, '¡Ingrese un correo electrónico válido!')
    }

    //validación edad


    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')

    if (edad.value < 18) {
        mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte!')
        validacionCorrecta = false
    } else {
        ocultarError(errorEdad)
    }

    //validación de la actividad

    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad')

    if (actividad.value == '') {
        mostrarError(errorActividad, 'Por favor, selecciona una actividad')
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad)
    }

     // Validación de nivel de estudio
     const nivelEstudio = document.getElementById('nivelEstudio')
     const errorNivelEstudio = document.getElementById('errorNivelEstudio')
 
     if (nivelEstudio.value == '') {
         mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio')
         validacionCorrecta = false;
     } else {
         ocultarError(errorNivelEstudio)
     }
 
     // Validar los términos y condiciones
 
     const aceptoTerminos = document.getElementById('aceptoTerminos')
     const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
 
     if (!aceptoTerminos.checked) {
         mostrarError(errorAceptoTerminos, '¡Debes aceptar los términos y condiciones!')
         validacionCorrecta = false
     } else {
         ocultarError(errorAceptoTerminos)
     }
 
     return validacionCorrecta // esto dirá si el formulario completo es o no válido
 

}


// funciones para mostrar y ocultar los mensajes en pantalla

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
};

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
};
