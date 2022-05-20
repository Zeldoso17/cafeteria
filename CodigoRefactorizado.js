const assert = require('assert');

// Objeto que contiene diferentes productos
const productos = [
    {
        nombre: 'Monitor',
        precio: 200
    },
    {
        nombre: 'Teclado',
        precio: 50
    },
    {
        nombre: 'Mouse',
        precio: 10
    }
]

// Función que devuelve el costo de un producto en específico
const totalProductoConDescuento = (productos, descuento) => {
    return productos[0].precio - ((productos[0].precio * descuento) / 100); // Retorna el total del producto
}

let tenner = totalProductoConDescuento(productos, 20); // Variable que ejecuta la función totalProductoConDescuento
assert.strictEqual(tenner, 160); // Aqui verificamos que la función totalProductoConDescuento devuelva el valor correcto

// función que devuelve el costo del carrito de compras
/*const totalCarrito = (productos) => {
    let total = 0; // Variable que almacena el total del carrito
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio; // Suma el precio de cada producto
    }
    return total; // Retorna el total del carrito
}*/

let totalCarrito = 0;
productos.forEach(producto => {
    totalCarrito += producto.precio;
})

assert.strictEqual(totalCarrito, 260); // Aqui verificamos que la función totalProductoConDescuento devuelva el valor correcto