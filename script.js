const dataCell = document.querySelectorAll('[data-cell]');

let arrO = [];
let arrX = [];
let marker = 'X';

const winMethod = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

dataCell.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    if (
      marker === 'X' &&
      !arrX.includes(Number(e.target.dataset.cell)) &&
      !arrO.includes(Number(e.target.dataset.cell))
    ) {
      e.target.innerText = marker;
      marker = 'O';
      arrX.push(Number(e.target.dataset.cell));
      winMethod.forEach((arr) => {
        if (checking(arr, 1)) {
          console.log('X win');
        }
      });
      return;
    }

    if (
      marker === 'O' &&
      !arrO.includes(Number(e.target.dataset.cell)) &&
      !arrX.includes(Number(e.target.dataset.cell))
    ) {
      e.target.innerText = marker;
      marker = 'X';
      arrO.push(Number(e.target.dataset.cell));
      winMethod.forEach((arr) => {
        if (checking(arr, 2)) {
          console.log('O win');
        }
      });
    }
  });
});

function checking(arrWin, code) {
  let counter = 0;
  if (code === 1) {
    for (let i = 0; i < 3; i++) {
      if (arrX.includes(arrWin[i])) {
        counter++;
      }
    }
  }
  if (code === 2) {
    for (let i = 0; i < 3; i++) {
      if (arrO.includes(arrWin[i])) {
        counter++;
      }
    }
  }
  return counter === 3 ? true : false;
}
