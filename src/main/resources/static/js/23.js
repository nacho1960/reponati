function initializeCalendar() {
               const reservas = [
                                       {
                                           idReserva: 123,
                                           fechaDeReserva: "2024-06-07T10:00:00Z",
                                           horaDeReserva: "2024-06-07T10:00:00Z"
                                       },
                                       {
                                           idReserva: 124,
                                           fechaDeReserva: "2024-06-08T04:00:00Z",
                                           horaDeReserva: "2024-06-08T04:00:00Z"
                                       },
                                    {
                                           idReserva: 125,
                                           fechaDeReserva: "2024-06-08T12:00:00Z",
                                           horaDeReserva: "2024-06-08T12:00:00Z"
                                     },
                                     {
                                           idReserva: 126,
                                           fechaDeReserva: "2024-06-08T15:00:00Z",
                                           horaDeReserva: "2024-06-08T15:00:00Z"
                                    },
                                   {
                                       idReserva: 127,
                                       fechaDeReserva: "2024-06-09T09:00:00Z",
                                       horaDeReserva: "2024-06-09T09:00:00Z"
                                   }
                                   ];

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
                                             title.style.color = '#ff0000'
                                           title.innerHTML = `Reservado de ${startTime} a ${endTime}`;


                                           // Devolver el contenido del evento
                                           return { domNodes: [title] };
                                       }
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


}