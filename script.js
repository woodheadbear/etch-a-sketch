const gridSize = 16;
const container = document.querySelector('#drawing-pad');

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

container.addEventListener('mouseover', function(event) {
    const cell = event.target.closest('.cell');
    if (!cell) return;

    const grad = Math.min(+(cell.dataset.gradation || '0') + 1, 10);
    cell.dataset.gradation = grad;
    cell.style.backgroundColor = `rgba(0, 0, 0, ${grad / 10})`;
});

createGrid(gridSize);