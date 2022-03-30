export function ampliarInformacionProducto(evento){

       let producto={}

       //lleno la información del producto
       producto.fotoinfo=evento.target.parentElement.querySelector("img").src
       producto.nombre=evento.target.parentElement.querySelector("h2").textContent 
       producto.descripcioninfo=evento.target.parentElement.querySelector("h4").textContent
       producto.precioinfo=evento.target.parentElement.querySelector("h3").textContent

       let nombre=document.getElementById("tituloinfo")
       nombre.textContent=evento.target.parentElement.querySelector("h2").textContent 
 
       let fotoinfo=document.getElementById("fotoinfo")
       fotoinfo.src=evento.target.parentElement.querySelector("img").src
 
       let descripcioninfo=document.getElementById("descripcioninfo")
       descripcioninfo.textContent=evento.target.parentElement.querySelector("h4").textContent
 
       let precioinfo=document.getElementById("precioinfo")
       precioinfo.textContent=evento.target.parentElement.querySelector("h3").textContent

       //devolver el producto generado
       return producto
    
    }