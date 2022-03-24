const gridContainer = document.querySelector('.container');
const gridCell = document.querySelectorAll('.grid-cell');
let color = document.querySelector('#color');
let gridSizeRange = document.querySelector('#grid-size-range');

function createGrid(row, cell) {
  gridContainer.innerHTML = '';
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

//Default grid size
createGrid(16, 16);

//Change the color of the grid item on mouse hover
gridContainer.addEventListener('mouseover', (e) => {
  e.target.closest('.grid-cell').style.backgroundColor = color.value;
});

//Display the value of the range slider to a span element
function changeGridSize(val) {
  document.getElementById('textInput').textContent = `${val} x ${val}`;
  createGrid(val, val);
}

gridSizeRange.addEventListener('change', () => {
  changeGridSize(document.querySelector('#grid-size-range').value);
});

function reset() {
  createGrid(16, 16);
  gridSizeRange.value = 16;
  color.value = '#000000';
}
