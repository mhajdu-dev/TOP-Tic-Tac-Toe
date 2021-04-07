let gameArray = ['','','','','','','','',''];
let player = 'O';

function changeArray(number) {
  if(gameArray[number] === '') {
    gameArray[number] = player;
  } else {
    return 
  }
};

function changePlayer () {
  if(player === 'X') {
    player = 'O'
  } else {
    player = 'X';
  }
};

const playTable = document.querySelector('.grid');

playTable.addEventListener('click', (e) => {
  changeArray(e.target.dataset.number)
  changePlayer();
  console.log(gameArray);
})