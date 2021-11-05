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