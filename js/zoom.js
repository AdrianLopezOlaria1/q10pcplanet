function zoomIn(img) {
    const zoomLayer = document.createElement('div');
    zoomLayer.classList.add('zoom-layer');
    img.parentNode.appendChild(zoomLayer);

    img.addEventListener('mousemove', function (event) {
        const boundingBox = this.getBoundingClientRect();
        const mouseX = event.clientX - boundingBox.left;
        const mouseY = event.clientY - boundingBox.top;

        const percentX = mouseX / boundingBox.width * 100;
        const percentY = mouseY / boundingBox.height * 100;

        zoomLayer.style.clipPath = `circle(65% at ${percentX}% ${percentY}%)`;
        img.style.transform = 'scale(1.3)'; // Puedes ajustar el nivel de zoom según tu preferencia
    });

    img.addEventListener('mouseout', function () {
        zoomLayer.style.clipPath = 'circle(0% at 65% 65%)';
        img.style.transform = 'scale(1)';
    });
}

function zoomOut(img) {
    const zoomLayer = img.parentNode.querySelector('.zoom-layer');
    if (zoomLayer) {
        img.parentNode.removeChild(zoomLayer);
    }
}

// window.onload = function () {
//     document.querySelectorAll('.computer').forEach(computer => {
//         const img = computer.querySelector('img');
//         const zoomLayer = document.createElement('div');
//         zoomLayer.classList.add('zoom-layer');
//         computer.appendChild(zoomLayer);

//         computer.addEventListener('mousemove', function (event) {
//             const boundingBox = this.getBoundingClientRect();
//             const mouseX = event.clientX - boundingBox.left;
//             const mouseY = event.clientY - boundingBox.top;

//             const percentX = mouseX / boundingBox.width * 100;
//             const percentY = mouseY / boundingBox.height * 100;

//             zoomLayer.style.clipPath = `circle(65% at ${percentX}% ${percentY}%)`;
//             img.style.transform = 'scale(1.3)'; // Puedes ajustar el nivel de zoom según tu preferencia
//         });

//         computer.addEventListener('mouseout', function () {
//             zoomLayer.style.clipPath = 'circle(0% at 65% 65%)';
//             img.style.transform = 'scale(1)';
//         });
//     });
// };