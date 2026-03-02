document.addEventListener("DOMContentLoaded", () => {

    // Scroll suave
    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute("href"));

            destino.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Validación formulario
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor completa todos los campos");
            return;
        }

        const mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.style.display = "block";

        formulario.reset();

        setTimeout(() => {
            mensajeExito.style.display = "none";
        }, 3000);
    });

});