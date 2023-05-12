let abarrotes = [
    {
        nombre: "Fideos",
        tipo: 1,
        precio: 850
    },
    {
        nombre: "Aceite",
        tipo: 1,
        precio: 2500
    },
    {
        nombre: "Arroz",
        tipo: 1,
        precio: 990
    },
    {
        nombre: "Azúcar",
        tipo: 1,
        precio: 1200
    }
];
 let frutas = [
    {
        nombre: "Manzanas",
        tipo: 2,
        precio: 1200
    },
    {
        nombre: "Peras",
        tipo: 2,
        precio: 850
    },
    {
        nombre: "Uvas",
        tipo: 2,
        precio: 2500
    },
    {
        nombre: "Frutillas",
        tipo: 2,
        precio: 4500
    }
];
let verduras = [
    {
        nombre: "Lechuga",
        tipo: 3,
        precio: 1000
    },
    {
        nombre: "Pimentón",
        tipo: 3,
        precio: 250
    },
    {
        nombre: "Zanahoria",
        tipo: 3,
        precio: 850
    },
    {
        nombre: "Cebolla",
        tipo: 3,
        precio: 1500
    }
];
let limpieza = [
    {
        nombre: "Cloro",
        tipo: 4,
        precio: 1500
    },
    {
        nombre: "Lavalozas",
        tipo: 4,
        precio: 2500
    },
    {
        nombre: "Detergente",
        tipo: 4,
        precio: 8500
    },
    {
        nombre: "Suavizante",
        tipo: 4,
        precio: 4500
    }
];
let productos = [];

const agregarALista = (opcion, opciones) => {
    let indice;
    switch (opcion) {
        case 1:
            indice = productos.findIndex(producto => abarrotes[opciones-1].nombre === producto.nombre);
            if (indice !== -1){
                productos[indice].cantidad +=1;
            }
            else{
                const nuevoProducto = {
                    ...abarrotes[opciones-1],
                    cantidad: 1
                };
                productos.push(nuevoProducto);
            };
            break;
        case 2:
            indice = productos.findIndex(producto => frutas[opciones-1].nombre === producto.nombre);
            if (indice !== -1){
                productos[indice].cantidad +=1;
            }
            else{
                const nuevoProducto = {
                    ...frutas[opciones-1],
                    cantidad: 1
                };
                productos.push(nuevoProducto);
            };
            break;
        case 3:
            indice = productos.findIndex(producto => verduras[opciones-1].nombre === producto.nombre);
            if (indice !== -1){
                productos[indice].cantidad +=1;
            }
            else{
                const nuevoProducto = {
                    ...verduras[opciones-1],
                    cantidad: 1
                };
                productos.push(nuevoProducto);
            };
            break;
        case 4:
            indice = productos.findIndex(producto => limpieza[opciones-1].nombre === producto.nombre);
            if (indice !== -1){
                productos[indice].cantidad +=1;
            }
            else{
                const nuevoProducto = {
                    ...limpieza[opciones-1],
                    cantidad: 1
                };
                productos.push(nuevoProducto);
            };
            break;
        default:
            break;
    }
}
const mostrarListaDeCompras = () => {
    let listaDeCompras = "Su lista de compras es :\n";
    let listaFiltrada;
    let totalCompra = 0;
    if (productos.length === 0){
        listaDeCompras = "Su lista de compras esta vacía";
        return listaDeCompras;
    }
    if (productos.find(producto => producto.tipo === 1)){
        listaFiltrada = productos.filter(producto => producto.tipo === 1);
        listaDeCompras += "**ABARROTES:\n";
        listaFiltrada.forEach(producto => {
            listaDeCompras += `${producto.cantidad} ${producto.nombre} Total: $${producto.precio * producto.cantidad}\n`;
            totalCompra += producto.precio * producto.cantidad;
        });
    }
    if(productos.find(producto => producto.tipo === 2)){
        listaFiltrada = productos.filter(producto => producto.tipo === 2);
        listaDeCompras += "**Frutas:\n";
        listaFiltrada.forEach(producto => {
            listaDeCompras += `${producto.cantidad} ${producto.nombre} Total: $${producto.precio * producto.cantidad}\n`;
            totalCompra += producto.precio * producto.cantidad;
        });
    }
    if(productos.find(producto => producto.tipo === 3)){
        listaFiltrada = productos.filter(producto => producto.tipo === 3);
        listaDeCompras += "**Verduras:\n";
        listaFiltrada.forEach(producto => {
            listaDeCompras += `${producto.cantidad} ${producto.nombre} Total: $${producto.precio * producto.cantidad}\n`;
            totalCompra += producto.precio * producto.cantidad;
        });
    }
    if(productos.find(producto => producto.tipo === 4)){
        listaFiltrada = productos.filter(producto => producto.tipo === 4);
        listaDeCompras += "**Limpieza:\n";
        listaFiltrada.forEach(producto => {
            listaDeCompras += `${producto.cantidad} ${producto.nombre} Total: $${producto.precio * producto.cantidad}\n`;
            totalCompra += producto.precio * producto.cantidad;
        })
    }
    listaDeCompras += `TOTAL DE LA LISTA DE COMPRAS: $${totalCompra}`;
    return listaDeCompras;
}
const imprimirOpciones = (opcion) =>{
    let texto = "";
    switch (opcion) {
        case 1:
            texto = `Elija el producto a agregar a su lista de compras:\n`;
            abarrotes.forEach((producto, index) =>texto += `${index + 1}-${producto.nombre} (precio por unidad: $${producto.precio})\n`);
            texto += `5-Salir` ;
            break;
        case 2:
            texto = `Elija el producto a agregar a su lista de compras:\n`;
            frutas.forEach((producto, index) =>texto += `${index + 1}-${producto.nombre} (precio por unidad: $${producto.precio})\n`);
            texto += `5-Salir` ;
            break;
        case 3:
            texto = `Elija el producto a agregar a su lista de compras:\n`;
            verduras.forEach((producto, index) =>texto += `${index + 1}-${producto.nombre} (precio por unidad: $${producto.precio})\n`);
            texto += `5-Salir` ;
            break;
        case 4:
            texto = `Elija el producto a agregar a su lista de compras:\n`;
            limpieza.forEach((producto, index) =>texto += `${index + 1}-${producto.nombre} (precio por unidad: $${producto.precio})\n`);
            texto += `5-Salir` ;
            break;
        case 5:
            texto = null;
            break;
        default:
            break;
    }
    return texto;
}

let deseaSeguir = prompt("Bienvenido a tu lista de compras, deseas agregar algo?(si/no)");
if (deseaSeguir.toLowerCase() ==="si"){
    let opcionNumber = 0;
    let opciones = 0;
    while (opcionNumber !== 5){
        let opcion = prompt("Seleccione la opción que desea:\n1-Abarrotes\n2-Frutas\n3-Verduras\n4-Limpieza\n5-Salir");
        opcionNumber = parseInt(opcion);
        if(isNaN(opcionNumber)){
            alert("Debe ingresar el valor númerico de su opción");
            opcionNumber = 0;
        }else if (opcionNumber>=1 && opcionNumber <5){
            while(opciones !== 5 ){
                let texto = imprimirOpciones(opcionNumber);
                opciones =  parseInt(prompt(texto));
                if (isNaN(opciones)){
                    alert("Debe ingresar el valor numérico de su opción");
                }else if(opciones > 0 && opciones < 5){
                    agregarALista(opcionNumber, opciones)
                }else if(opciones !== 5){
                    alert("Ingrese una opción válida");
                };
            };
        }else if(opcionNumber !== 5){
            alert("Ingrese una opción válida");
        }
    };
    alert(mostrarListaDeCompras());
}else if(deseaSeguir.toLowerCase() !=="no") {
    location.reload();
}
