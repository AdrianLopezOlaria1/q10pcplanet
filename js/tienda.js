var dineroGastado = 0;

function anyadirAlCarrito(id, precio) {
    dineroGastado += precio;
    actualizarContador();
    mostrarNotificacionAnyadir(precio);
}

function quitarDelCarrito(id, precio) {
    dineroGastado -= precio;
    dineroGastado = Math.max(0, dineroGastado); // Evita que el contador sea negativo
    actualizarContador();
    mostrarNotificacionQuitar(precio);
}

function mostrarNotificacionAnyadir(precio) {
    if (Notification.permission === 'granted') {
        new Notification('Producto añadido al carrito', {
            body: 'Se ha añadido un producto al carrito. Nuevo total: ' + dineroGastado.toFixed(2) + '€',
            icon: 'img/icono.ico'
        });
    }
}

function mostrarNotificacionQuitar(precio) {
    if (Notification.permission === 'granted') {
        new Notification('Producto quitado del carrito', {
            body: 'Se ha quitado un producto del carrito. Nuevo total: ' + dineroGastado.toFixed(2) + '€',
            icon: 'img/icono.ico'
        });
    }
}

function actualizarContador() {
    var contadorElement = document.getElementById("contador");
    contadorElement.innerHTML = "Total:<span class='verde'> " + dineroGastado.toFixed(2) + "€</span>";
}

// Solicitar permiso para notificaciones al cargar la página
if ('Notification' in window) {
    Notification.requestPermission();
}
