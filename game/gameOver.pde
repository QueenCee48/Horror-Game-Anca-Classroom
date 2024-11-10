public class gameOver {

  private button restartButton;
  private PImage image;
  private String restartText;
  
  public gameOver() {
    background(0);
    if (lives == 2) {
      image = loadImage("anca3-1.png");
      image.resize(400,400);
      restartText = "TRY AGAIN";
    }
    else if (lives == 1) {
      image = loadImage("anca3-2.png");
      image.resize(400,400);
      restartText = "TRY AGAIN";
    }
    else if (lives == 0) {
      image = loadImage("anca3-3.png");
      image.resize(400,400);
      restartText = "RESTART";
      lives = 3;
    }
    restartButton = new button(width / 2 - 100, height / 2 + 170, 200, 40, restartText);
  }
  
  public void draw() {
    image(image,width/2-200,0);
    restartButton.draw();
  }
  
  public boolean isRestartButtonClicked() {
    return restartButton.overButton();
  }
}
