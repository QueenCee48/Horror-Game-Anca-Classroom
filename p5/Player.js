function Player(game) {
  
  this.game = game;
  this.playerX = game.width/2;
  this.playerY = game.height/2;
    
  this.playerImage = loadImage("/game/player.png");
  
  this.drawPlayer = function() {
    this.playerX = mouseX-10;
    this.playerY = mouseY-10;
    
    image(this.playerImage,this.playerX,this.playerY);
  }
  
  this.getPlayerX = function(){
    return this.playerX;
  }
  
  this.getPlayerY = function(){
    return this.playerY;
  }
}
