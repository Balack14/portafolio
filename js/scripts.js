// Menú de hamburguesa

function abrirNav() {
    document.getElementById("miNav").style.width = "100%";
}

function cerrarNav() {
    document.getElementById("miNav").style.width = "0%";
}

// Modal de proyectos

function abrirModal(titulo, descripcion, imagenSrc) {
    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-descripcion").textContent = descripcion;
    document.getElementById("modal-img").src = imagenSrc;
    document.getElementById("modal-proyecto").classList.add("activo");
}

function cerrarModal() {
    document.getElementById("modal-proyecto").classList.remove("activo");
}

// Filtros de proyectos

const botonesFilto = document.querySelectorAll(".btn-filtro");

botonesFilto.forEach(function(boton) {
    boton.addEventListener("click", function() {
        botonesFilto.forEach(function(b) { b.classList.remove("activo-filtro"); });
        boton.classList.add("activo-filtro");

        const categoria = boton.getAttribute("data-categoria");
        const tarjetas = document.querySelectorAll(".proyecto-tarjeta");

        tarjetas.forEach(function(tarjeta) {
            if (categoria === "todos" || tarjeta.getAttribute("data-categoria") === categoria) {
                tarjeta.style.display = "flex";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });
});

// Formulario de contacto

const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        formulario.style.display = "none";
        document.getElementById("alerta-enviado").classList.remove("oculto");
    });
}
