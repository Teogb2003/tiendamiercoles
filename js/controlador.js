import { llenarTienda } from './llenadoTienda.js';
import {ampliarInformacionProducto} from './ampliarinfo.js'

//creo un producto vacio
let producto={}

//llamando a tienda llenado
llenarTienda()
//referencia al modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modacompra = new bootstrap.Modal(document.getElementById('resumencompra'))


//Rutina para ampliar información
let filaContenedora = document.getElementById("fila")
filaContenedora.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){

    producto=ampliarInformacionProducto(evento)
    console.log(producto)
    modalinfo.show()
    }
})

//Rutina para añadir un producto al carrito de compras
let carrito=[]
let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){

    //Capturar cantidad y agregarla al producto
    let cantidad = document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad

    //Agrego al carrito
    carrito.push(producto)

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
       
    })
     

    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalinfo.hide();


})

//Rutina para limpiar
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(){
    
    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")
})

//Rutina para ver el carrito
let botonVerCarrito=document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click",function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById("basecarro")

    base.innerHTML=""


    carrito.forEach(function(producto){

        let fila = document.createElement("div")
        fila.classList.add("row")
        
        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let nombre=document.createElement("h2")
        nombre.classList.add("text-center")
        nombre.classList.add("text-danger")
        nombre.classList.add("fst-italic")
        nombre.textContent=producto.nombre

        let precioinfo=document.createElement("h5")
        precioinfo.classList.add("text-center")
        precioinfo.classList.add("text-danger")
        precioinfo.classList.add("fst-italic")
        precioinfo.textContent="Precio unidad: $"+producto.precioinfo

        let cantidadP=document.createElement("h5")
        cantidadP.classList.add("text-center")
        cantidadP.classList.add("text-danger")
        cantidadP.classList.add("fst-italic")
        cantidadP.textContent="Cantidad: "+producto.cantidad
        
        let subtotal=document.createElement("h5")
        subtotal.classList.add("text-center")
        subtotal.classList.add("text-danger")
        subtotal.classList.add("fst-italic")
        subtotal.textContent="Subtotal: $"+producto.precioinfo * producto.cantidad


        //PADRES E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precioinfo)
        columna2.appendChild(cantidadP)
        columna2.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.append(fila)
    })

    modacompra.show();
})