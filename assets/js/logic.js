// Agrega un listener de clic a cada elemento nav-link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    // Remueve la clase active de todos los elementos nav-link
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });
    // Agrega la clase active al elemento nav-link que se presionó
    event.target.classList.add('active');
  });
});

// Asigna la clase unread a los accordion-button que no han sido leídos
document.querySelectorAll('.accordion-button:not(.read)').forEach(button => {
  button.classList.add('unread');
});

// Remueve la clase unread cuando se presiona un accordion-button
document.addEventListener('click', event => {
  if (event.target.classList.contains('accordion-button')) {
    event.target.classList.remove('unread');
  }
});

// Selecciona la imagen del chat-header
const perfilImg = $('.chat-header img');

// Agrega un evento de click a la imagen
perfilImg.on('click', function () {
  // Muestra el contenedor con la imagen de perfil ampliada y el buscador de conversaciones
  const perfilContainer = $('.perfil-container');
  perfilContainer.show();
});

// Agrega un evento de click en el documento para cerrar el contenedor
$(document).on('click', function (event) {
  // Si el click no es dentro del contenedor con la clase perfil-container
  if (!$(event.target).closest('.perfil-container').length && !$(event.target).closest('.chat-header img').length) {
    // Cierra el contenedor
    $('.perfil-container').hide();
  }
});


