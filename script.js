// Botón volver arriba
window.onscroll = function () {
    const btn = document.getElementById("btn-arriba");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("btn-arriba").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Validación formulario
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Ingrese un correo válido.");
        return;
    }

    alert("Formulario enviado con éxito.");
    this.reset();
});
