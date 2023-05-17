class Producto {
    constructor(nombre, tipo, precio) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._precio = precio;
        this._cantidad = 0;
    }
    get nombre(){
        return  this._nombre.toUpperCase();
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get cantidad(){
        return this._cantidad;
    }
    get precio(){
        return this._precio
    }
    get cantidad(){
        return this._cantidad
    }
    get tipo(){
        return this._tipo;
    }
    aumentarCantidad() {
        this._cantidad++;
    }
    calcularTotal() {
      return this._precio * this._cantidad;
    }
}
let productosDisponibles = [
    new Producto("Fideos", 1, 850),
    new Producto("Aceite", 1, 2500),
    new Producto("Arroz", 1, 990),
    new Producto("Azúcar", 1, 1200),
    new Producto("Manzanas", 2, 1200),
    new Producto("Peras", 2, 850),
    new Producto("Uvas", 2, 2500),
    new Producto("Frutillas", 2, 4500),
    new Producto("Lechuga", 3, 1000),
    new Producto("Pimentón", 3, 250),
    new Producto("Zanahoria", 3, 850),
    new Producto("Cebolla", 3, 1500),
    new Producto("Cloro", 4, 1500),
    new Producto("Lavalozas", 4, 2500),
    new Producto("Detergente", 4, 8500),
    new Producto("Suavizante", 4, 4500)
];
let productosLista = [];

const agregarALista = (productoSeleccionado) => {
    let index = productosLista.findIndex(producto => producto.nombre === productoSeleccionado.nombre.toUpperCase());
    if (index > -1) {
        productosLista[index].aumentarCantidad()
    } else {
        productoSeleccionado.aumentarCantidad();
        productosLista.push(productoSeleccionado);
    }
};
const mostrarListaDeCompras = () => {
    let listaDeCompras = "Su lista de compras es:\n";
    let totalCompra = 0;
    if (productosLista.length === 0) {
        listaDeCompras = "Su lista de compras está vacía";
        return listaDeCompras;
    }
    productosLista.forEach(producto => {
        const cantidad = producto.cantidad;
        if (cantidad > 0) {
            const total = producto.calcularTotal();
            listaDeCompras += `* ${cantidad} ${producto.nombre} Total: $${total}\n`;
            totalCompra += total;
        }
    });
    listaDeCompras += `TOTAL DE LA LISTA DE COMPRAS: $${totalCompra}`;
    return listaDeCompras;
  };
const imprimirOpciones = opcion => {
    let texto = `Escriba el producto a agregar a su lista de compras:\n`;
    const productosFiltrados = productosDisponibles.filter(producto => producto.tipo === opcion);
    productosFiltrados.forEach((producto, index) => {
        texto += `* ${producto.nombre} (precio por unidad: $${producto.precio})\n`;
    });
    texto += `* Salir`;
    return texto;
};

let deseaSeguir = prompt("Bienvenido a tu lista de compras, ¿deseas agregar algo? (si/no)");
if (deseaSeguir.toLowerCase() === "si") {
    let opcion = 0;
    let opcionNumber = 0;
    while (opcionNumber !== 5) {
    let opcion = prompt("Seleccione la opción que desea:\n1-Abarrotes\n2-Frutas\n3-Verduras\n4-Limpieza\n5-Salir");
    opcionNumber = parseInt(opcion);
    let opciones = "";
    if (isNaN(opcionNumber)) {
        alert("Debe ingresar el valor numérico de su opción");
        opcionNumber = 0;
    } else if (opcionNumber >= 1 && opcionNumber < 5) {
        while (opciones.toUpperCase() !== 'SALIR') {
            let texto = imprimirOpciones(opcionNumber);
            opciones = prompt(texto);
            if (opciones === "") {
                alert("Debe ingresar el nombre de lo que desea agregar");
            } else if (opciones.toUpperCase() !== 'SALIR'){
                let productoSeleccionado = productosDisponibles.find(producto => producto.nombre === opciones.toUpperCase());
                (productoSeleccionado)?agregarALista(productoSeleccionado):alert("Ingrese una opción válida");
            }
        }
    }
    }
    alert(mostrarListaDeCompras());
}else if(deseaSeguir.toLowerCase() !== "no")location.reload();



