const gridContainer = document.querySelector('.grid-container');
const clearGridBtn = document.querySelector('.clear-grid-btn');
const newGridBtn = document.querySelector('.new-grid-btn');
const randomColorBtn = document.querySelector('.random-color-btn');
const colorInput = document.querySelector('#colorSel');
let gridSize = 64;
let gridCreated;
let pixels = undefined;
let isRandomColor = false;

clearGridBtn.addEventListener('click', () => {
  clearGrid();
});

newGridBtn.addEventListener('click', () => {
  askSize();
});

randomColorBtn.addEventListener('click', () => {
  randomColorBtn.classList.toggle('enabled');
  isRandomColor = !isRandomColor;
});

createGrid(gridSize);

const getRandomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16); 

function clearGrid() {
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = "#FFFFFF";
  });
}

function deleteGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  gridCreated = false;
}

function askSize() {
  gridSize = Number(prompt('How large would you like the grid to be ? (Enter a value between 1 and 100.)'));
  if (isNaN(gridSize)) {
    gridSize = 64;
    alert('You didn\'t enter a number. Using default grid size: 64x64');
  } else if (gridSize > 100) {
    gridSize = 100;
  } else if (gridSize < 1) {
    gridSize = 1;
  }

  createGrid(gridSize);
}

function createGrid(gridSize) {
  if (gridCreated) {
    deleteGrid();
  }

  for (i = 0; i < gridSize * gridSize; i++) {
    let divSquare = gridContainer.appendChild(document.createElement('div'));
    divSquare.classList.add('pixel');
  }

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
      if (isRandomColor) {
        pixel.style.backgroundColor = getRandomColor();
      }
      else {
        pixel.style.backgroundColor = colorInput.value; //`${color}`;
      }
    });
  });
  gridCreated = true;
}