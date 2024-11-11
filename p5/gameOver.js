function gameOver() {

  background(0);

  if (lives == 2) {
    anca1 = loadImage("anca3-1.png");
    anca1.resize(400,400);
    this.restartText = "TRY AGAIN";
  }
  else if (lives == 1) {
    anca2 = loadImage("anca3-2.png");
    anca2.resize(400,400);
    this.restartText = "TRY AGAIN";
  }
  else if (lives == 0) {
    anca3 = loadImage("anca3-3.png");
    anca3.resize(400,400);
    this.restartText = "RESTART";
    lives = 3;
  }
  this.restartButton = new button(width / 2 - 100, height / 2 + 170, 200, 40, this.restartText);
  
  this.draw = function() {

    if (lives == 2) {
      image(anca1,width/2-200,0);
    }
    else if (lives == 1) {
      image(anca2,width/2-200,0);
    }
    else if (lives == 0) {
      image(anca3,width/2-200,0);
    }
    
    this.restartButton.draw();
  }
  
  this.isRestartButtonClicked = function() {
    return this.restartButton.overButton();
  }
}
