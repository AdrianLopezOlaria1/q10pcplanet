/* window.onload = function () {

    document.getElementsByTagName("form")[0].onsubmit = comprobar;
}; */

function comprobar(event) {
    var telefono = document.getElementById("numero").value;
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (telefono === "" || nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        event.preventDefault();
    }

    if (!/^\d{3}\s\d{3}\s\d{3}$/.test(telefono)) {
        alert("Introduce un numero de telefono valido");
        event.preventDefault();
    }
}