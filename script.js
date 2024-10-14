
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