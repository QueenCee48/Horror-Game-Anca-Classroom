function button(x, y, buttonWidth, buttonHeight, words) {

  this.normalColor = color(0,100,0);
  this.hoverColor = color(179,255,108);
  
  this.isPressed = false;
  
  this.x = x;
  this.y = y;
  this.buttonWidth = buttonWidth;
  this.buttonHeight = buttonHeight;
  this.words = words;
  this.currentColor = this.normalColor;
  
  this.draw = function() {
    if (this.overButton()) {
      this.currentColor = this.hoverColor;
    } else {
      this.currentColor = this.normalColor;
    }
    fill(this.currentColor);
    this.makeButton();
  }
  
  this.makeButton = function() {
    rectMode(CORNER);
    rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
   
    fill(0,255,0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(this.words, (this.x + this.buttonWidth / 2), (this.y + this.buttonHeight / 2));
  }
  
  this.overButton = function() {
    return mouseX >= this.x && mouseX <= this.x + this.buttonWidth && mouseY >= this.y && mouseY <= this.y + this.buttonHeight;
  }
  
  this.handleMousePressed = function() {
    if (this.overButton()) {
      this.isPressed = true;
    }
  }
  
  this.handleMouseReleased = function() {
    this.isPressed = false;
  }
}
