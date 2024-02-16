var dineroGastado = 0;
var contadorElement = document.getElementById("contador");

// Solicitar permiso para notificaciones al cargar la página
if ('Notification' in window) {
    Notification.requestPermission();
}

function anyadirAlCarrito(id,precio) {
  let nombre = sacarnombre(precio);
  if (nombre === 'ERROR') {
      console.error('Precio no reconocido.');
      return;
  }

  var xhr = new XMLHttpRequest();
  // Construir la URL con parámetros para el método GET
  var url = "js/php/tienda.php?nombre=" + encodeURIComponent(nombre) + "&precio=" + encodeURIComponent(precio) +"&id="+ id;

  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          dineroGastado += precio;
          actualizarContador();
          mostrarNotificacion(precio);
      }
  }; 
  xhr.send(); // No se envían datos adicionales en la petición GET
}

function mostrarNotificacion(precio) {
    if (Notification.permission === 'granted') {
        let notificacion = new Notification('Producto añadido al carrito', {
            body: 'Se ha añadido un producto al carrito. Nuevo total: $' + dineroGastado.toFixed(2),
            icon: '../img/icono.ico'
        });
    }
}





function quitarDelCarrito(id, precio) {
  if (dineroGastado <= 0 || dineroGastado - precio < 0) {
      alert("El carrito está vacío. No hay elementos para quitar.");
  } else {
      var xhr = new XMLHttpRequest();
      var url = "js/php/quitarDelCarrito.php?id=" + id;

      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              dineroGastado -= precio;
              actualizarContador();
              mostrarNotificacion(precio);
              // Puedes añadir aquí más lógica si necesitas actualizar la UI
          }
      };
      xhr.send();
  }
}

function mostrarNotificacion(precio) {
  if (Notification.permission === 'granted') {
      let notificacion = new Notification('Producto añadido al carrito', {
          body: 'Se ha quitado un producto del carrito. Nuevo total: $' + dineroGastado.toFixed(2),
          icon: '../img/icono.ico'
      });
  }
}

function actualizarContador() {
    contadorElement.innerHTML = "Total:<span class='verde'> " + dineroGastado.toFixed(2) + "€</span>";
    
    
}

function sacarnombre(precio){
    switch (precio) {
        case 779.50:
          return 'PcCom_Ready_Intel'
          break;
        case 749.00:
            return '"Medion Erazer Engineer P10"'
            break;
        case 419.99:
            return 'HP%20%15S-eq2126ns'
          break;
          case 489.00:
            return 'PcCom%20%Lite'
          break;
          case 600.00:
            return 'PcCOm Imperial'
          break;
          case 799.99:
            return 'MSI THin GF63'
          break;
          case 950.00:
            return 'ASUS TUF Gaming F15'
          break;
          case 788.99:
            return 'Arizone Raijin'
          break;
          case 788.99:
            return 'Asus 15DX30'
          break;
        default:
            return 'ERROR'
          break;
      }
      
}