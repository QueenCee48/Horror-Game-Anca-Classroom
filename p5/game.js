var player;
var maze;
var gameOverScreen;
var gameStartScreen;

var lost;
var start;

var attempt = 0;
var lives = 3;

// function preload() {
//   anca1 = loadImage("anca3-1.png");
//   anca2 = loadImage("anca3-2.png");
//   anca3 = loadImage("anca3-3.png");
//   mazeImage = loadImage("maze.png");
//   playerImage = loadImage("player.png");
// }

function setup() {

  // let assetWrapper = select('#asset-wrapper');
  // assetWrapper.child(gameContainer);

  // let body = select('body');
  // body.child(gameContainer);
  
  var canvas = createCanvas(960,430);
  noCursor();
  reset();
  background(255);

  let gameContainer = createDiv();

  gameContainer.id("game-container");

  gameContainer.child(canvas);

  // let mazeContainer = createDiv();
  let buttonContainer = createDiv();
  let playerContainer = createDiv();
  
  // mazeContainer.id("maze-container");
  buttonContainer.id("button-container")
  playerContainer.id("player-container")

  // gameContainer.child(mazeContainer);
  gameContainer.child(buttonContainer);
  gameContainer.child(playerContainer);

  // let mazeImageContainer = createImg();
  // mazeImageContainer.id("maze-image-container")
  // mazeImageContainer.child(maze.mazeImage);
  
  // mazeContainer.child(maze);
  // mazeContainer.child(mazeImageContainer);
  
  buttonContainer.child(gameOver.restartButton);
  buttonContainer.child(gameStart.startButton);
  playerContainer.child(player);
}

function reset() {
  player = new player(this);
  maze = new maze(this);
  start = false;
  lost = false;
}

function draw() {
  if (!start && !lost) {
    background(0);
    if (gameStartScreen == null) {
      gameStartScreen = new gameStart();
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
      gameOverScreen = new gameOver();
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
        gameStartScreen = new gameStart();
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
