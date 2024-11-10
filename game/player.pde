public class player {
  private int playerX, playerY;
  private game game;
  PImage player;
  
  public player(game game) {
    this.game = game;
    this.playerX = game.width/2;
    this.playerY = game.height/2;
    
    player = loadImage("player.png");
  }
  
  public void drawPlayer() {
    playerX = mouseX;
    playerY = mouseY;
    
    image(player,playerX,playerY);
  }
  
  public float getPlayerX(){
    return playerX;
  }
  
  public float getPlayerY(){
    return playerY;
  }
}
