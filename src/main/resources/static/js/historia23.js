      function initializeCalendar() {
    const urlParams = new URLSearchParams(window.location.search);
    const idReserva = urlParams.get('id');
    const divReservaDetail = document.getElementById("reservaDetail");

    // Comentamos el fetch porque ya no lo necesitamos
    const url = 'https://localhost:8080/reservas/' + idReserva;
    const settings = {
        method: 'GET'
    };

    fetch(url, settings)
        .then(response => {
            if (!response.ok) {
                throw new Error('error en la red');
            }
            return response.json();
        })
        .then(reservas => {
            const calendarEl = document.getElementById('calendario');
            const calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                eventContent: function(arg) {
                    // Obtener las fechas de inicio y fin del evento
                    const startDate = new Date(arg.event.start);
                    const endDate = new Date(arg.event.end);

                    // Formatear la hora de inicio
                    const startHours = startDate.getUTCHours().toString().padStart(2, '0');
                    const startMinutes = startDate.getUTCMinutes().toString().padStart(2, '0');
                    const startTime = `${startHours}:${startMinutes}`;

                    // Formatear la hora de fin
                    const endHours = endDate.getUTCHours().toString().padStart(2, '0');
                    const endMinutes = endDate.getUTCMinutes().toString().padStart(2, '0');
                    const endTime = `${endHours}:${endMinutes}`;

                    // Crear el contenido del título del evento
                    const title = document.createElement('div');
                    //title.classList.add('reserva-title'); y agregar al css y modificar el color
                    title.style.color = '#ff0000';
                    title.innerHTML = `Reservado de ${startTime} a ${endTime}`;

                    // Devolver el contenido del evento
                    return { domNodes: [title] };
                }
            });

            // Así ordeno el array de reservas, resta la primera con la segunda y si da negativo el segundo es más chico que el primero, así lo va ordenando
            reservas.sort((a, b) => {
                return new Date(a.fechaDeReserva) - new Date(b.fechaDeReserva);
            });

            // Agregar cada reserva al calendario
            const reservaColor = '#ff0000';
            reservas.forEach(reserva => {
                const startDate = new Date(reserva.fechaDeReserva);
                const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Una hora después

                calendar.addEvent({
                    title: '',  // El título se manejará en eventContent
                    start: startDate,
                    end: endDate,
                    color: reservaColor
                });
            });

            calendar.render();
        })
        .catch(error => {
            console.error('Error al hacer el  fetching  en la seccion de reservas:', error);
           alert("en este momento no hay acceso a la red por favor intente mas tarde")
        });
}



