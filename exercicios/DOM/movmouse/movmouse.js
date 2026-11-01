window.addEventListener('mousemove', function (event) {
    const localiza = document.getElementById('position');

    let positionX = document.getElementById('positionX');
    let positionY = document.getElementById('positionY');

    localiza.style.left = event.clientX + (5) + 'px';
    localiza.style.top = event.clientY + 'px';

    positionX.innerText = event.clientX + 'px';
    positionY.innerText = event.clientY + 'px';
});
