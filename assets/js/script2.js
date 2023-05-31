let productosDisponibles = [...productos];
let selectedProducts = [];
class Producto {
    constructor(nombre, tipo, precio,img) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._precio = precio;
        this._cantidad = 0;
        this._img=img
    }
    get nombre(){
        return  this._nombre;
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
    get img(){
        return this._img;
    }
    aumentarCantidad() {
        this._cantidad++;
    }
    calcularTotal() {
      return this._precio * this._cantidad;
    }
}

const listProducts = (option) => {
    let html = '';
    let quantity = 0;
    let selectedProductsToShow = productosDisponibles.filter(producto => producto.tipo === option);
    selectedProductsToShow.forEach(product => {
        let qProduct = selectedProducts.find(productS => productS._nombre === product.nombre);
        quantity = (qProduct)?quantity=qProduct._cantidad:quantity=0;
        html +=`
        <div class="card" style="width: 18rem;">
            <img src=${product.img} class="card-img-top cardImg" alt=${product.nombre}>
            <div class="card-body">
              <h5 class="card-title">${product.nombre}</h5>
              <p class="card-text">Precio unitario: ${product.precio}</p>
              <p class="card-text">Cantidad a comprar: ${quantity}</p>
              <a href="#" class="btn btn-primary btnAdd">Agregar a la lista de compras</a>
            </div>
        </div>
        `
    });
    document.getElementById('products').innerHTML = html;
    const btns = document.getElementsByClassName('btnAdd');
    Array.from(btns).forEach((btn, index) =>{
        btn.addEventListener('click',(event) =>{
            const product = selectedProductsToShow[index];
            addProduct(product);
            listProducts(option);
        });
        btn.setAttribute('data-product', index);
    });
};

const addProduct = (product) => {
    const existProduct = selectedProducts.findIndex(productInList => productInList._nombre === product.nombre);
    if(existProduct!== -1){
        selectedProducts[existProduct].aumentarCantidad()
    }else{
        const newProduct = new Producto(product.nombre,product.tipo,product.precio, product.img);
        newProduct.aumentarCantidad();
        selectedProducts.push(newProduct);
    };
    localStorage.setItem('products', JSON.stringify(selectedProducts));
};

const getList = () => {
    let list = localStorage.getItem('products');
    if (list) {
        const parsedList = JSON.parse(list);
        const productList = parsedList.map(productData => {
            const { _nombre, _tipo, _precio, _cantidad, _img } = productData;
            const product = new Producto(_nombre, _tipo, _precio, _img);
            product._cantidad = _cantidad;
            product._img = "./assets/img/" + _nombre.toLowerCase() + ".jpeg";
            return product;
        });
        return productList;
    } else {
        return [];
    }
}

const showList = () => {
    let list = [];
    list = getList();
    let total = 0;
    let html = '';
    if(list.length > 0){
        list.forEach(product => {
            html +=`
            <div class="card" style="width: 18rem;">
                <img src=${product.img} class="card-img-top cardImg" alt=${product.nombre}>
                <div class="card-body">
                  <h5 class="card-title">${product.nombre}</h5>
                  <div class="d-flex justify-content-around">
                    <p class="card-text">Precio unitario: ${product.precio}</p>
                    <p class="card-text">Cantidad: ${product.cantidad}</p>
                  </div>
                  <p class="card-text text-center">Total: ${product.calcularTotal()} </p>
                </div>
            </div>
            `
            total += product.calcularTotal();
        })
        document.getElementById('products').innerHTML = html;
        document.getElementById('total').innerHTML = `El total de la compra será: ${total}`;
    }else{
        document.getElementById('products').innerHTML = `<h2>Su lista de compras esta vacía</h2>`
        document.getElementById('total').innerHTML = '';
    };
}

document.getElementById('abarrotes').addEventListener('click',()=>listProducts(1));
document.getElementById('frutas').addEventListener('click',()=>listProducts(2));
document.getElementById('verduras').addEventListener('click',()=>listProducts(3));
document.getElementById('limpieza').addEventListener('click',()=>listProducts(4));
document.getElementById('lista').addEventListener('click',()=>showList());


