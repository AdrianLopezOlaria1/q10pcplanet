
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}
function sacardatos(datos, idDiv) {
    if (XMLHttpRequestObject) {
        var objeto = document.getElementById(idDiv);
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = function () {
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}
window.onload = function () {
    const tiempoEspera = 2000;

        // Función para ocultar el GIF de carga y cargando después del tiempo de espera
function cargando() {
        document.getElementById('cargando').style.display = 'none';
        sacardatos('tienda.html', 'contenido')

}

        // Configurar el tiempo de espera usando setTimeout
    setTimeout(cargando, tiempoEspera);



let tienda = document.getElementById("tienda")
let about = document.getElementById("about")
let contacto = document.getElementById("contacto")





tienda.addEventListener('click', function () {
    sacardatos('tienda.html', 'contenido')
})
about.addEventListener('click', function () {
    sacardatos('about.html', 'contenido')
})
contacto.addEventListener('click', function () {
    sacardatos('contacto.html', 'contenido')
})};


