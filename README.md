nati aca te envio este repo tiene un js llamado 23 que seria como hariamos el fetch si tuvieramos bacjk uno llamado 23 que inicia sin el back (es el harcodeado) y ahora agregue uno llamado  23 listadoreservas.html que podria ser la tercera opcion pero ese es practicamente hacerlo de cero ( es mas parecido a lo que decia el profe y me parece que vamos a tener que ir por ahi aunque me  duela jajajajajaajja)....vas a ver en el detail prods la siguientes lineas que son las que meten el script de historia 23  para que se renderize donde se renderiza .....por otra parte hay un script  adentro de detailprod.html( <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.14/index.global.min.js'></script>) que es lo que hace andar el full calendar 
  // Crear y añadir el div del calendario
            let calendarioDiv = document.createElement('div');
            calendarioDiv.id = 'calendario';
            divCard.appendChild(calendarioDiv);





            divCard.appendChild(buttonReserva);

            divDescripcionYCard.appendChild(divCard);
              // Inicializar el calendario despues de que se mete la div card que tiene el calendario adentro sino no funciona
            initializeCalendar();
