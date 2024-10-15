
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



        // Seleccionar todos los elementos con la clase 'brilla'
        const objetos = document.querySelectorAll('.especialidad');

        // Variable para almacenar el elemento activo
        let objetoActivo = null;

        // Añadir un evento de clic a cada objeto
        objetos.forEach(function(objeto) {
            objeto.addEventListener('click', function() {
                // Si hay un objeto activo, quitarle la clase 'active'
                if (objetoActivo) {
                    objetoActivo.classList.remove('active');
                }

                // Añadir la clase 'active' al objeto actualmente clicado
                objeto.classList.add('active');

                // Actualizar el objeto activo
                objetoActivo = objeto;
            });
        });

        function toggleText(element) {
            // Verificar si ya está activa, para cerrar o abrir
            element.classList.toggle('active');
        }






// Función para alternar la visibilidad del menú desplegable
function toggleDropdown(dropdownButton) {
    const dropdownContent = dropdownButton.nextElementSibling; // Seleccionar el menú correspondiente

    // Alternar la visibilidad del menú
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        dropdownButton.innerHTML = dropdownButton.innerHTML.replace("&#9660;", "&#9650;"); // Cambiar a triángulo hacia arriba
    } else {
        closeAllDropdowns(); // Cerrar todos los menús antes de abrir el actual
        dropdownContent.style.display = "block";
        dropdownButton.innerHTML = dropdownButton.innerHTML.replace("&#9650;", "&#9660;"); // Cambiar a triángulo hacia abajo
    }
}

// Función para alternar la visibilidad de submenús
function toggleSubDropdown(subButton) {
    const subDropdownContent = subButton.nextElementSibling; // Seleccionar el submenú correspondiente

    if (subDropdownContent.style.display === "block") {
        subDropdownContent.style.display = "none";
        subButton.innerHTML = subButton.innerHTML.replace("&#9660;", "&#9650;");
    } else {
        closeAllSubDropdowns(); // Cerrar todos los submenús antes de abrir el actual
        subDropdownContent.style.display = "block";
        subButton.innerHTML = subButton.innerHTML.replace("&#9650;", "&#9660;");
    }
}
// Función para cerrar todos los menús desplegables
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    const buttons = document.querySelectorAll(".dropdown-button");

    dropdowns.forEach(dropdown => {
        dropdown.style.display = "none"; // Ocultar todos los menús
    });

    // Cambiar el triángulo de vuelta a la posición hacia arriba en todos los botones
    buttons.forEach(button => {
        button.innerHTML = button.innerHTML.replace("&#9660;", "&#9650;");
    });

    // Cerrar también los submenús
    closeAllSubDropdowns();
}

// Función para cerrar todos los submenús
function closeAllSubDropdowns() {
    const subDropdowns = document.querySelectorAll(".dropdown-sub-content");
    const subButtons = document.querySelectorAll(".dropdown-button-sub");

    subDropdowns.forEach(subDropdown => {
        subDropdown.style.display = "none"; // Ocultar todos los submenús
    });

    // Cambiar el triángulo de vuelta a la posición hacia arriba en todos los botones de submenú
    subButtons.forEach(subButton => {
        subButton.innerHTML = subButton.innerHTML.replace("&#9660;", "&#9650;");
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
