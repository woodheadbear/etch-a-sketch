const container = document.querySelector('#drawing-pad');
const startButton = document.querySelector('#start-game');
const resetButton = document.querySelector('#reset-game');
let fieldSize = 16; // default grid size

function getGridSize() {
    let gridSize;

    do {
        gridSize = askForNumber();
        if (gridSize === null) return;
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);

    createGrid(gridSize);

    return gridSize;
}

function askForNumber() {
    let number = prompt("Enter a number between 1 and 100:");
    if (number === null) return null;

    return Number(number);
}

function createGrid(size) {
    container.innerHTML = '';
    const cellSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        container.appendChild(cell);
    }
}

container.addEventListener('mouseover', function (event) {
    const cell = event.target.closest('.cell');
    if (!cell) return;

    const grad = Math.min(+(cell.dataset.gradation || '0') + 1, 10);
    cell.dataset.gradation = grad;
    cell.style.backgroundColor = `rgba(0, 0, 0, ${grad / 10})`;
});

startButton.addEventListener('click', () => {
    fieldSize = getGridSize();
});

resetButton.addEventListener('click', function () {
    createGrid(fieldSize);
});

createGrid(fieldSize);