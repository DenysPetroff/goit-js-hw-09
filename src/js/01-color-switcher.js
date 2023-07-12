function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const selectors = {                                   
    buttonStart: document.querySelector('button[data-start]'),
    buttonStop: document.querySelector('button[data-stop]')
}
selectors.buttonStop.disabled = true;
selectors.buttonStart.addEventListener('click', startColorChange);
selectors.buttonStop.addEventListener('click', stopColorChange);

let interval;

function startColorChange() { 
    selectors.buttonStart.disabled = true;
    selectors.buttonStop.disabled = false;
    interval = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    }, 1000); 
}

    function stopColorChange() { 
    selectors.buttonStart.disabled = false;
    selectors.buttonStop.disabled = true;
    clearInterval(interval);
}

