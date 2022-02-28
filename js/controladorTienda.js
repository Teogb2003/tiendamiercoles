//Controlando etiquetas

//1. crear una variable para guardar una etiqueta
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)


//controlando el menu
let etiquetaMenu = document.getElementById("menu")

//2. como modificar el texto de una etiqueta
etiquetaTitulo.textContent="rojo vos no existis"
etiquetaMenu.textContent="Goku"

//Controlando una foto
let etiquetaFoto = document.getElementById("fotogoku")
etiquetaFoto.src="img/logo.png"

//Cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")