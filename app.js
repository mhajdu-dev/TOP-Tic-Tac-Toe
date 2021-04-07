let gameArray = ['','','','','','','','',''];
let player = 'O';

function changePlayer () {
  if(player === 'X') {
    player = 'O'
  } else {
    player = 'X';
  }
};

document.addEventListener('click', (e) => {
  console.log(e.target.dataset.number);
})