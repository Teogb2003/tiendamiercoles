let etiquetaBoton = document.getElementById("boton")

etiquetaBoton.addEventListener("click",cambiarFoto)

function cambiarFoto (){

    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="Buenos dias señor"
}

let etiquetaImagen = document.getElementById("logo")

etiquetaImagen.addEventListener("mouseover",cambiartitulo)

function cambiartitulo(){
    let etiquetaTitulo =document.getElementById("titulo1")
    etiquetaTitulo.textContent="Estoy cambiando"
}