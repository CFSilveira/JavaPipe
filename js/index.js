const btn = document.getElementById('container');
const gameBoard = document.getElementById('game-board')
const battlefield = Math.floor(Math.random() *3) + 1;
const gameStarted = new Audio();
const gameMusic = new Audio();

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      gameStarted.play();
      startGame();
      btn.style.display = 'none';
      gameBoard.style.display = 'flex'
    };
  
    function startGame() {
      const game = new Game();
      game.start();
      gameMusic.play();
    }

      
};