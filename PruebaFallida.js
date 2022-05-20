const assert = require('assert');

// Función que devuelve el costo de un producto en específico
const totalProductoConDescuento = (productos, descuento) => {
    let cantidadConDescuento = (productos[0].precio * descuento) / 100; // Cantidad que se descuenta del producto
    let total = productos[0].precio - cantidadConDescuento; // Total del producto con descuento
    return total; // Retorna el total del producto
}

let tenner = totalProductoConDescuento(productos, 10); // Variable que ejecuta la función totalProductoConDescuento
assert.strictEqual(tenner, 3150); // Aqui verificamos que la función totalProductoConDescuento devuelva el valor correcto

// función que devuelve el costo del carrito de compras
const totalCarrito = (productos) => {
    let total = 0; // Variable que almacena el total del carrito
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio; // Suma el precio de cada producto
    }
    return total; // Retorna el total del carrito
}

let tenner2 = totalCarrito(productos); // Variable que ejecuta la función totalProductoConDescuento
assert.strictEqual(tenner2, 260); // Aqui verificamos que la función totalProductoConDescuento devuelva el valor correcto