var player;
var maze;
var gameOverScreen;
var gameStartScreen;

var lost;
var start;

var attempt = 0;
var lives = 3;

function setup() {

  var canvas = createCanvas(960,430);
  noCursor();
  reset();
  background(255);

  let gameContainer = createDiv();
  gameContainer.id("game-container");
  gameContainer.child(canvas);
}

function reset() {
  this.player = new Player(this);
  this.maze = new Maze(this);
  start = false;
  lost = false;
}

function draw() {
  if (!start && !lost) {
    background(0);
    if (gameStartScreen == null) {
      gameStartScreen = new GameStart();
    }
    gameStartScreen.draw();
    player.drawPlayer();
  }
  else if (start && !lost) {
    background(255);
    maze.drawMaze();
    player.drawPlayer();
    maze.mazeEnd();
    livesBoard();
  }
  else if (lost) {
    background(0);
    if (gameOverScreen == null) {
      gameOverScreen = new GameOver();
    }
    gameOverScreen.draw();
    player.drawPlayer();
  }
}

  function livesBoard() {
    textAlign(LEFT);
    textSize(20);
    fill(0,100,0);
    text("LIVES: ", 25, 40);
    
    fill(0,255,0);
    if (lives == 3) {
      rect(100,33.5,15,15);
      rect(125,33.5,15,15);
      rect(150,33.5,15,15);
    }
    else if (lives == 2) {
      rect(100,33.5,15,15);
      rect(125,33.5,15,15);
    }
    else if (lives == 1) {
      rect(100,33.5,15,15);
    }
  }

  function mouseClicked() {
    if (!start && !lost) {
      if (gameStartScreen == null) {
        gameStartScreen = new GameStart();
      }
      
      if (gameStartScreen.isStartButtonPressed()) {
        start = true;
      }
    }
    else if (lost) {
      if (gameOverScreen.isRestartButtonClicked()) {
        reset();
        gameOverScreen = null;
        gameStartScreen = null;
      }
    }
  }
