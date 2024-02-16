cambiarColorHeader();

function cambiarColorHeader() {
    var header = document.getElementById("miHeader");

    setInterval(function() {
        var color = getRandomColor();
        header.style.backgroundColor = color;
    }, 2000); 

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
}