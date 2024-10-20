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






        // Función para alternar la visibilidad del menú desplegable
        function toggleDropdown(dropdownButton) {
            const dropdownContent = dropdownButton.nextElementSibling; // Seleccionar el menú correspondiente
            const arrow = dropdownButton.querySelector('.arrow'); // Seleccionar la flecha
            const isOpen = dropdownContent.style.display === "block"; // Comprobar si está abierto

            // Alternar la visibilidad del menú
            if (isOpen) {
                dropdownContent.style.display = "none";
                arrow.classList.remove('down');
                arrow.classList.add('up');
            } else {
                closeAllDropdowns(); // Cerrar todos los menús antes de abrir el actual
                dropdownContent.style.display = "block";
                arrow.classList.remove('up');
                arrow.classList.add('down');
            }
        }

        // Función para alternar la visibilidad de submenús
        function toggleSubDropdown(subButton) {
            const subDropdownContent = subButton.nextElementSibling; // Seleccionar el submenú correspondiente
            const arrow = subButton.querySelector('.arrow'); // Seleccionar la flecha
            const isOpen = subDropdownContent.style.display === "block"; // Comprobar si está abierto

            if (isOpen) {
                subDropdownContent.style.display = "none";
                arrow.classList.remove('down');
                arrow.classList.add('up');
            } else {
                closeAllSubDropdowns(); // Cerrar todos los submenús antes de abrir el actual
                subDropdownContent.style.display = "block";
                arrow.classList.remove('up');
                arrow.classList.add('down');
            }
        }

        // Función para cerrar todos los menús desplegables
        function closeAllDropdowns() {
            const dropdowns = document.querySelectorAll(".dropdown-content");
            const buttons = document.querySelectorAll(".dropdown-button");

            dropdowns.forEach(dropdown => {
                dropdown.style.display = "none"; // Ocultar todos los menús
            });

            buttons.forEach(button => {
                const arrow = button.querySelector('.arrow');
                arrow.classList.remove('down');
                arrow.classList.add('up');
            });

            closeAllSubDropdowns();
        }

        // Función para cerrar todos los submenús
        function closeAllSubDropdowns() {
            const subDropdowns = document.querySelectorAll(".dropdown-sub-content");
            const subButtons = document.querySelectorAll(".dropdown-button-sub");

            subDropdowns.forEach(subDropdown => {
                subDropdown.style.display = "none"; // Ocultar todos los submenús
            });

            subButtons.forEach(subButton => {
                const arrow = subButton.querySelector('.arrow');
                arrow.classList.remove('down');
                arrow.classList.add('up');
            });
        }

        // Asignar la función a cada botón de desplegable principal
        document.querySelectorAll(".dropdown-button").forEach(button => {
            button.addEventListener("click", function(event) {
                event.stopPropagation(); // Evitar que se cierre el menú al hacer clic en el botón
                toggleDropdown(button); // Pasar el botón actual a la función
            });
        });

        // Asignar la función a cada botón de submenú
        document.querySelectorAll(".dropdown-button-sub").forEach(subButton => {
            subButton.addEventListener("click", function(event) {
                event.stopPropagation(); // Evitar que se cierre el submenú al hacer clic en el botón
                toggleSubDropdown(subButton); // Pasar el botón de submenú actual a la función
            });
        });

        // Cerrar todos los desplegables si se hace clic fuera de ellos
        document.addEventListener("click", function() {
            closeAllDropdowns();
        });
