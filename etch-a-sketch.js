const gridContainer = document.querySelector('.grid-container');
let gridSize = 64;
let gridCreated;
let pixels = undefined;

createGrid(gridSize);

function clearGrid() {
  pixels.forEach(pixel => {
    pixel.classList.remove('black');
  })
}

function askSize() {
  gridSize = Number(prompt('How large would you like the grid to be ?'));
  console.log(gridSize);
  if (isNaN(gridSize)) {
    gridSize = 64;
    alert('You didn\'t enter a number. Using default grid size: 64x64');
  } else if (gridSize > 100) {
    gridSize = 100;
  } else if (gridSize < 1) {
    gridSize = 1;
  }

  console.log(gridSize)
  createGrid(gridSize);
}

function createGrid(gridSize) {
  if (gridCreated) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    gridCreated = false;
  }

  for (i=0;i< gridSize * gridSize;i++) {
    let divSquare = gridContainer.appendChild(document.createElement('div'));
    divSquare.classList.add('pixel');
  }

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
      pixel.classList.add('black');
    });
  });
  gridCreated = true;
}