import Inventario from "./Inventario.js";
import Articulo from "./Articulo.js";

class Main{
    constructor(){
        let inventario = new Inventario(
            document.querySelector("#tablaArticulo"), document.querySelector("#info")
        );
        
    document.querySelector("#btnAgregar").addEventListener("click",()=>{

        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;
        let toString = document.querySelector("#toString");
        
        let objArticulo = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion
        };

        let articulo = new Articulo(objArticulo);
            inventario.AgregarArticulo(articulo);
            inventario.AddTable(articulo);
            inventario.Inverción(articulo);

        toString.textContent = articulo.toString();
        
    });
    
    }
}

let m = new Main()