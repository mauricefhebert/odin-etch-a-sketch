const gridContainer = document.querySelector('.container');

function createGrid(row, cell) {
  for (let i = 0; i < row; i++) {
    const x = document.createElement('div');
    x.classList.add('grid-item');
    gridContainer.append(x);
    for (let j = 0; j < cell; j++) {
      const y = document.createElement('div');
      y.classList.add('grid-item');
      x.append(y);
    }
  }
}

createGrid(16, 16);
