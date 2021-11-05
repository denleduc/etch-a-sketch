const gridContainer = document.querySelector('.grid-container');
let gridSize = 64;

for (i=0;i< gridSize * gridSize;i++) {
  let divSquare = gridContainer.appendChild(document.createElement('div'));
  divSquare.classList.add('black');
  divSquare.classList.add('pixel');
}

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
