document.addEventListener("DOMContentLoaded", () => {

    // 🔹 Scroll suave
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute("href"));
            destino.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🔹 Validación de formulario
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        alert("Mensaje enviado correctamente 🚀");
        formulario.reset();
    });

    // 🔹 Evento botón CTA
    const botonCTA = document.querySelector(".cta-btn");

    botonCTA.addEventListener("click", () => {
        alert("Bienvenido a CloudPay 🎉");
    });

    // 🔹 Animación al hacer scroll
    const secciones = document.querySelectorAll("section");

    const mostrarSeccion = (entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
                observador.unobserve(entrada.target);
            }
        });
    };

    const observador = new IntersectionObserver(mostrarSeccion, {
        threshold: 0.2
    });

    secciones.forEach(seccion => {
        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(40px)";
        seccion.style.transition = "all 0.6s ease";
        observador.observe(seccion);
    });

});