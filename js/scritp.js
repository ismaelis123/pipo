let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const contenidoCarrito = document.getElementById('contenido-carrito');
    contenidoCarrito.innerHTML = '';

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.producto} - $${item.precio}`;
        contenidoCarrito.appendChild(div);
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${total}`;
}

function comprar() {
    alert(`Total a pagar: $${total}`);
    carrito = [];
    total = 0;
    actualizarCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const sections = document.querySelectorAll('.producto-seccion');
            sections.forEach(section => section.style.display = 'none');
            
            const target = document.querySelector(event.target.hash);
            if (target) {
                target.style.display = 'block';
            }
        });
    });

    const infoSection = document.getElementById('informacion');
    if (infoSection) {
        infoSection.style.display = 'block';
    }
});
