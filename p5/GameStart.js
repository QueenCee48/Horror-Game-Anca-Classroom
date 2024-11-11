function GameStart() {
  
  this.startButton = new Button(0, height/2-40, 80, 80, "");
  
  this.draw = function() {
    //start box
    textAlign(LEFT, LEFT);
    fill(0,100,0);
    textSize(25);
    text("START",0,height/2-55);
    this.startButton.draw();
  }
  
  this.isStartButtonPressed = function() {
    return this.startButton.overButton();
  }
}
