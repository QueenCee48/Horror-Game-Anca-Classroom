function player(game) {
  
  this.game = game;
  this.playerX = game.width/2;
  this.playerY = game.height/2;
    
  playerImage = loadImage("player.png");
  
  this.drawPlayer = function() {
    this.playerX = mouseX;
    this.playerY = mouseY;
    
    image(playerImage,this.playerX,this.playerY);
  }
  
  this.getPlayerX = function(){
    return this.playerX;
  }
  
  this.getPlayerY = function(){
    return this.playerY;
  }
}
