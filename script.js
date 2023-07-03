const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

let intervalID;



function startChangeColor() {
    if (!intervalID) {
        intervalID = setInterval(changeColor, 1000);
    }
}

function stopChangeColor() {
    clearInterval(intervalID);
}


function changeColor() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        box.style.backgroundColor = `#${randomColor}`;
    })
}

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);




