import './styles/header.css';

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