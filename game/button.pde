public class button {
  int x, y, buttonWidth, buttonHeight;
  String text;
  
  color normalColor = color(0,100,0);
  color hoverColor = color(179,255,108);
  color currentColor;
  
  boolean isPressed = false;
  
  public button(int x, int y, int buttonWidth, int buttonHeight, String text) {
    this.x = x;
    this.y = y;
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.text = text;
    this.currentColor = normalColor;
  }
  
  void draw() {
    if (overButton()) {
      currentColor = hoverColor;
    } else {
      currentColor = normalColor;
    }
    fill(currentColor);
    makeButton();
  }
  
  void makeButton() {
    rectMode(CORNER);
    rect(x, y, buttonWidth, buttonHeight);
   
    fill(0,255,0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(text, x + buttonWidth / 2, y + buttonHeight / 2);
  }
  
  boolean overButton() {
    return mouseX >= x && mouseX <= x + buttonWidth && mouseY >= y && mouseY <= y + buttonHeight;
  }
  
  void handleMousePressed() {
    if (overButton()) {
      isPressed = true;
    }
  }
  
  void handleMouseReleased() {
    isPressed = false;
  }
}
