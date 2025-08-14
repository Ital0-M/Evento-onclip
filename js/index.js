let botonInicio = document.querySelector(".Inicio");

    botonInicio.addEventListener("click", function () {
        if (botonInicio.textContent === "Iniciar Sesion") {
            botonInicio.textContent = "Cerrar Sesion";
        } 
        else {
            botonInicio.textContent = "Iniciar Sesion";
        }
    });
let botonDerecha =document.querySelector(".botonDerecha");
    botonDerecha.addEventListener("click", function(){
        botonDerecha.style.display = "none";
    });
    
let botonLikeGato = document.querySelector(".botonIzquierda.superior");
    botonLikeGato.addEventListener("click", function () {
        let numero = parseInt(botonLikeGato.childNodes[0].textContent.trim());
        numero++;
        botonLikeGato.childNodes[0].textContent = numero + " ";
        let titulo = botonLikeGato.closest(".contenedorSuperior").querySelector("h2").textContent;
        alert(`Te gustó la definicion: ${titulo}`);
    });

let botonLikeGolden = document.querySelector(".botonIzquierda.inferior");
    botonLikeGolden.addEventListener("click", function () {
        let numero = parseInt(botonLikeGolden.childNodes[0].textContent.trim());
        numero++;
        botonLikeGolden.childNodes[0].textContent = numero + " ";
        let titulo = botonLikeGolden.closest(".contenedorInferior").querySelector("h2").textContent;
        alert(`Te gusto la definición: ${titulo}`);
    });