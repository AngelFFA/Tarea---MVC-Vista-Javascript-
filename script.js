const formularioComentarios = document.getElementById('formularioComentarios');
const nombreUsuario = document.getElementById('nombreUsuario');
const textoComentario = document.getElementById('textoComentario');
const listaComentarios = document.getElementById('listaComentarios');
const contador = document.getElementById('contador');

// Función para agregar un nuevo comentario a la lista.
function agregarComentario(evento) {
    evento.preventDefault(); // Evita erecargar la web cuando se preciona enter. 

    const nombre = nombreUsuario.value.trim();
    const comentario = textoComentario.value.trim();

    if (nombre === '' || comentario === '') {
        alert('Por favor, rellene ambos campos.');
        return;
    }

    // Crear el elemento de comentario.
    const comentarioDiv = document.createElement('div');
    comentarioDiv.className = 'comentario';

    // Crear el contenido del comentario.
    const contenido = document.createElement('p');
    contenido.textContent = `${nombre}: ${comentario}`;
    
    // Crear el botón de eliminar.
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() {
        listaComentarios.removeChild(comentarioDiv);
    };

    // Añadir el contenido y el botón al elemento de comentario.
    comentarioDiv.appendChild(contenido);
    comentarioDiv.appendChild(botonEliminar);

    // Añadir el nuevo comentario a la lista.
    listaComentarios.appendChild(comentarioDiv);

    // Limpiar los campos del formulario.
    nombreUsuario.value = '';
    textoComentario.value = '';
    contador.textContent = '200 caracteres restantes';
}

// Función para actualizar el contador de caracteres.
function actualizarContador() {
    const caracteresRestantes = 200 - textoComentario.value.length;
    contador.textContent = `${caracteresRestantes} caracteres restantes`;
}

formularioComentarios.addEventListener('submit', agregarComentario);
textoComentario.addEventListener('input', actualizarContador);
