document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('booking-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

        // Recolectar los datos del formulario
        const name = form.elements['name'].value;
        const people = form.elements['people'].value;
        const date = form.elements['date'].value;
        const time = form.elements['time'].value;

        // Simulación de envío: Mostrar una alerta de confirmación
        alert(`¡Gracias, ${name}! Tu reserva para ${people} personas el día ${date} a las ${time} ha sido recibida. Te contactaremos pronto para confirmar.`);

        // Limpiar el formulario después del envío
        form.reset();
    });

    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});