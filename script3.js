"use strict";

const rectangle = document.getElementById('rectangle');
let moving = true;

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function moveRectangle() {
    if (moving) {
        const maxX = window.innerWidth - rectangle.offsetWidth;
        const maxY = window.innerHeight - rectangle.offsetHeight;
        const newX = getRandomPosition(maxX);
        const newY = getRandomPosition(maxY);

        rectangle.style.left = `${newX}px`;
        rectangle.style.top = `${newY}px`;
    }
}

rectangle.addEventListener('mouseover', () => {
    moving = false;
});

rectangle.addEventListener('mouseout', () => {
    moving = true;
    moveRectangle();
});

setInterval(moveRectangle, 1000);