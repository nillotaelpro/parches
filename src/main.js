import './styles/reset.css';
import './styles/especialidades.css';
import './styles/header.css';
import './styles/info_especialidad.css';
import './styles/dark_or_white.css';


        // Seleccionamos el campo de búsqueda y las especialidades
        const searchInput = document.getElementById('search');
        const especialidades = document.querySelectorAll('.especialidad');

        // Escuchar cuando el usuario escribe en el campo de búsqueda
        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();

            // Recorrer cada especialidad
            especialidades.forEach(function(especialidad) {
                const especialidadText = especialidad.querySelector('h2').textContent.toLowerCase();

                // Mostrar u ocultar según si coincide el texto
                if (especialidadText.includes(searchTerm)) {
                    especialidad.classList.remove('hidden');
                } else {
                    especialidad.classList.add('hidden');
                }
            });
        });




// Seleccionar todos los elementos con la clase 'especialidad'
const objetos = document.querySelectorAll('.especialidad');

// Variable para almacenar el elemento activo
let objetoActivo = null;

// Añadir un evento de clic solo a la imagen dentro de cada especialidad
objetos.forEach(function(objeto) {
    const imagen = objeto.querySelector('img'); // Seleccionar la imagen dentro de cada especialidad

    // Escuchar el clic en la imagen
    imagen.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado y la propagación
        event.preventDefault();
        event.stopPropagation();

        // Si el objeto clicado ya es el activo, quitar la clase 'active' y desactivarlo
        if (objeto === objetoActivo) {
            objeto.classList.remove('active');
            objetoActivo = null; // No hay ningún objeto activo ahora
        } else {
            // Si hay un objeto activo diferente, quitarle la clase 'active'
            if (objetoActivo) {
                objetoActivo.classList.remove('active');
            }

            // Añadir la clase 'active' al objeto actualmente clicado
            objeto.classList.add('active');

            // Actualizar el objeto activo
            objetoActivo = objeto;
        }
    });
});
