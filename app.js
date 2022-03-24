const gridContainer = document.querySelector('.container');
const gridCell = document.querySelectorAll('.grid-cell');
let color = document.querySelector('#color');

function createGrid(row, cell) {
  for (let i = 0; i < row; i++) {
    const x = document.createElement('div');
    x.classList.add('grid-item');
    gridContainer.append(x);
    for (let j = 0; j < cell; j++) {
      const y = document.createElement('div');
      y.classList.add('grid-item');
      y.classList.add('grid-cell');
      x.append(y);
    }
  }
}
createGrid(16, 16);
gridContainer.addEventListener('mouseover', (e) => {
  e.target.closest('.grid-cell').style.backgroundColor = color.value;
});
