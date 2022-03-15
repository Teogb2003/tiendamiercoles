//creando un arreglo de objetos

let productos=[


   {foto: "productos/figura.jpg",   nombre:"figura goku ssj3",  precio:"$"+25000, descripcion:"figura de acción goku niño ssj3", boton:"COMPRAR"},
   {foto: "productos/camiseta.jpg", nombre:"camiseta goku",precio:"$"+50000, descripcion:"camiseta original goku ultrainstinto", boton:"COMPRAR"},
   {foto: "productos/esferas.jpg",  nombre:"esferas dbz", precio:"$"+100000, descripcion:"kit completo esferas del dragon", boton:"COMPRAR"},
   {foto: "productos/gorra.jpg",    nombre:"gorra goku blue", precio:"$"+15000, descripcion:"toei animation gorra goku ssj blue", boton:"COMPRAR"},
   {foto: "productos/figura2.jpg",  nombre:"figura shenron", precio:"$"+30000, descripcion:"figura crystal shenlong con esferas", boton:"COMPRAR"},
   {foto: "productos/chaqueta.jpg", nombre:"chaqueta dragon ball", precio:"$"+150000, descripcion:"chaqueta original dragon ball", boton:"COMPRAR"},
   {foto: "productos/mochila.jpg",  nombre:"mochila dragon ball", precio:"$"+60000, descripcion:"mochila dragon ball adaptable", boton:"COMPRAR"},
   {foto: "productos/funda.png",    nombre:"funda goku ssj dios", precio:"$"+30000, descripcion:"funda silicon suave iphone X o XS", boton:"COMPRAR"},
   {foto: "productos/monopoly.jpg", nombre:"monopoly edición dbz", precio:"$"+70000, descripcion:"juego de mesa monopoly edición dbz", boton:"COMPRAR"},
   {foto: "productos/ps4.jpg",      nombre:"PS4 FAT skin dbz", precio:"$"+2500000, descripcion:"PS4 FAT 500gb personalizada dbz", boton:"COMPRAR"}
]

console.log(productos)

//Necesito recorrer un arreglo en JS

//1.Creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")
productos.forEach(function(producto){
   console.log(producto.nombre)
   console.log(producto.precio)
   console.log(producto.foto)

   //Pintando etiquetas
   
   //div con la clase col
   let columna=document.createElement("div")
   columna.classList.add("col")

   //Div con las clases card h-100
   let tarjeta = document.createElement("div")
   tarjeta.classList.add("card")
   tarjeta.classList.add("h-100")

   //img con la clase card-img-top
   let foto=document.createElement("img")
   foto.classList.add("card-img-top")
   foto.src=producto.foto

   //h4 con la clase text center
   let titulo=document.createElement("h2")
    titulo.classList.add("text-center")
    titulo.classList.add("text-danger")
    titulo.classList.add("fst-italic")
    titulo.textContent=producto.nombre

    //Precio
    let precio=document.createElement("h3")
    precio.classList.add("text-center")
    precio.classList.add("text-danger")
    precio.classList.add("fst-italic")
    precio.textContent=producto.precio

    //Descripición
    let descripcion=document.createElement("h4")
    descripcion.classList.add("text-center")
    descripcion.classList.add("fst-italic")
    descripcion.textContent=producto.descripcion

    //Botones
    let boton=document.createElement("button")
    boton.classList.add("text-center")
    boton.classList.add("btn-danger")
    boton.classList.add("fst-italic")
    boton.textContent=producto.boton

   //3. PADRES HE HIJOS
   tarjeta.appendChild(titulo)
   tarjeta.appendChild(foto)
   tarjeta.appendChild(precio)
   tarjeta.appendChild(descripcion)
   tarjeta.appendChild(boton)
   columna.appendChild(tarjeta)
   fila.appendChild(columna)
   
})





//COMO RECORRER UN ARREGLO CON JS
//1. TENER UN ARREGLO 
/*productos.forEach(function(producto){
   console.log(producto.nombre)
   console.log(producto.precio)
})*/