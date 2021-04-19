const playTable = document.querySelector('.grid');
let gameArray = ['','','','','','','','',''];
let player = 'O';

function changeArray(number) {
  if(gameArray[number] === '') {
    gameArray[number] = player;
  } else {
    return; 
  }
};

function changePlayer () {
  if(player === 'X') {
    player = 'O'
  } else {
    player = 'X';
  }
};

function renderGrid() {
  let array = Array.from(playTable.children);
  for(let i = 0; i < gameArray.length; i++) {
    array[i].innerHTML = gameArray[i];
  }
}

function isOver() {
  //implement the logic what compares the values in the array, and if there is three equal in vertically,
  //horizontally or diagonal, ends the game
  if(gameArray[0] == gameArray[1] && gameArray[0] == gameArray[2]) {
    console.log(`${player} won the game!`);
    gameArray = ['','','','','','','','',''];
    renderGrid();
  } else if(gameArray[3] == gameArray[4] && gameArray[3] == gameArray[5]) {
    console.log(`${player} won the game!`);
    gameArray = ['','','','','','','','',''];
    renderGrid();
  } else if(gameArray[6] == gameArray[7] && gameArray[6] == gameArray[8]) {
    console.log(`${player} won the game!`);
    gameArray = ['','','','','','','','',''];
    renderGrid();
  }

}


playTable.addEventListener('click', (e) => {
  changeArray(e.target.dataset.number)
  changePlayer();
  renderGrid();
  isOver();
  console.log(e.target.dataset.number);
})