private player player;
private maze maze;
private gameOver gameOverScreen;
private gameStart gameStartScreen;

public boolean lost;
public boolean start;

public int attempt = 0;
public int lives = 3;

public void setup() {
  size(960,430);
  noCursor();
  reset();
  background(255);
}

public void reset() {
  player = new player(this);
  maze = new maze(this);
  start = false;
  lost = false;
}

public void draw() {
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

  public void livesBoard() {
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

  public void mouseClicked() {
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
