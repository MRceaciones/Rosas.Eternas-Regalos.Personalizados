// Carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

// Función para actualizar el carrito en consola (puedes modificarlo para que se muestre en pantalla)
function actualizarCarrito() {
    console.log("Carrito de Compras:");
    carrito.forEach((item, index) => {
        function AgregarCarrito(nombre, precio) {
            carrito.push({ nombre, precio: Number(precio) });
            actualizarCarrito();
        }
    });
}

// Mensaje de confirmación al enviar el formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
        form.reset();
    });
});