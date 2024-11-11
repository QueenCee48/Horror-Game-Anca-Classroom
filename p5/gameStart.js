function gameStart() {
  
  this.startButton = new button(0, height/2-40, 80, 80, "");
  
  this.draw = function() {
    //start box
    textAlign(LEFT, LEFT);
    fill(0,100,0);
    textSize(30);
    text("START",0,height/2-45);
    this.startButton.draw();
  }
  
  this.isStartButtonPressed = function() {
    return this.startButton.overButton();
  }
}
