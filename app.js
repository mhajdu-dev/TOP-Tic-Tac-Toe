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
  // console.log(array)
  // array.forEach((e) => {
  //   e.innerHTML = player;
  // })
}


playTable.addEventListener('click', (e) => {
  changeArray(e.target.dataset.number)
  changePlayer();
  renderGrid();
  console.log(gameArray);
})