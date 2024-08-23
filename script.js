const gridContainer = document.getElementById('grid');
const selectSizeBtn = document.getElementById('select-size');
const gridSizeDisplay = document.getElementById('grid-size-display');
const blackBtn = document.getElementById('black');
const randomBtn = document.getElementById('random');
const resetBtn = document.getElementById('reset');

let gridSize = 70;
let currentColor = 'black';

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1 fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = currentColor;
        });
        gridContainer.appendChild(gridItem);
    }
}

selectSizeBtn.addEventListener('click', () => {
    gridSize = parseInt(prompt('Enter grid size (e.g., 16 for 16x16 grid):', gridSize), 10);
    if (isNaN(gridSize) || gridSize < 1) {
        gridSize = 70; // default size
    }
    gridSizeDisplay.textContent = `Your grid size ${gridSize} x ${gridSize}`;
    createGrid(gridSize);
});

blackBtn.addEventListener('click', () => {
    currentColor = 'black';
});

randomBtn.addEventListener('click', () => {
    currentColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

resetBtn.addEventListener('click', () => {
    createGrid(gridSize);
});

// Initialize grid
createGrid(gridSize);
