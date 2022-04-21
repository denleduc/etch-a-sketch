const grid = (() => {
  const gridContainer = document.querySelector('.grid-container');
  let gridCreated;
  const colorInput = document.querySelector('#colorSel');
  let isRandomColor = false;
  let pixels = undefined;

  function create(size = 64) {
    if (gridCreated) {
      del();
    }
  
    for (i = 0; i < size * size; i++) {
      let divSquare = gridContainer.appendChild(document.createElement('div'));
      divSquare.classList.add('pixel');
    }
  
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
      pixel.addEventListener('mouseover', () => {
        if (isRandomColor) {
          pixel.style.backgroundColor = getRandomColor();
        }
        else {
          pixel.style.backgroundColor = colorInput.value;
        }
      });
    });
    gridCreated = true;
  }

  function del() {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    gridCreated = false;
  }

  const getRandomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16); 

  function toggleRandomColor() {
    isRandomColor = !isRandomColor;
  }

  function getPixels() {return pixels;}

  return {create, del, toggleRandomColor, getPixels}
})();

const UI = (() => {
  const clearGridBtn = document.querySelector('.clear-grid-btn');
  const newGridBtn = document.querySelector('.new-grid-btn');
  const randomColorBtn = document.querySelector('.random-color-btn');

  function askSize() {
    let gridSize = Number(prompt('How large would you like the grid to be ? (Enter a value between 1 and 100.)'));
    if (isNaN(gridSize)) {
      gridSize = 64;
      alert('You didn\'t enter a number. Using default grid size: 64x64');
    } else if (gridSize > 100) {
      gridSize = 100;
    } else if (gridSize < 1) {
      gridSize = 1;
    }
  
    grid.create(gridSize);
  }

  function clear() {
    grid.getPixels().forEach(pixel => {
      pixel.style.backgroundColor = "#FFFFFF";
    });
  }

  clearGridBtn.addEventListener('click', () => {
    clear();
  });
  
  newGridBtn.addEventListener('click', () => {
    askSize();
  });

  randomColorBtn.addEventListener('click', () => {
    randomColorBtn.classList.toggle('enabled');
    grid.toggleRandomColor();
  });

  return {askSize, clear}
})();

const png = (() => {
  
})();

grid.create();