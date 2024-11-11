function Maze(game) {
  
  this.ALPHALEVEL = 20;
  
  this.game = game;
  this.mazeImage = loadImage("/game/maze.png");
  
  this.drawMaze = function() {
    image(this.mazeImage,0,0);
    
    textAlign(LEFT, LEFT);

    //start box
    fill(0,100,0);
    textSize(25);
    text("START",0,height/2-55);
    rectMode(CENTER);
    rect(40, height/2, 80, 80);
    
    //end box
    fill(0,100,0);
    textSize(25);
    text("END",width-65,height/2-55);
    rectMode(CENTER);
    rect(width-40, height/2, 80, 80);
  }
  
  this.pixelCollision = function(maze, mazeX, mazeY, player, playerX, playerY) {
    
    this.maze = maze;
    this.mazeX = mazeX;
    this.mazeY = mazeY;
    this.player = player;
    this.playerX = playerX;
    this.playerY = playerY;
    
    this.topMaze = int(this.mazeY);
    this.botMaze = int(this.mazeY + this.maze.height);
    this.leftMaze = int(this.mazeX);
    this.rightMaze = int(this.mazeX + this.maze.width);
    this.topPlayer = int(this.playerY);
    this.botPlayer = int(this.playerY + this.player.height);
    this.leftPlayer = int(this.playerX);
    this.rightPlayer = int(this.playerX + this.player.width);
    
    if (this.botMaze <= this.topPlayer || this.botPlayer <= this.topMaze || this.rightMaze <= this.leftPlayer || this.rightPlayer <= this.leftMaze)
      return false;
      
    this.leftOverlap = (this.leftMaze < this.leftPlayer) ? this.leftPlayer : this.leftMaze;
    this.rightOverlap = (this.rightMaze > this.rightPlayer) ? this.rightPlayer : this.rightMaze;
    this.botOverlap = (this.botMaze > this.botPlayer) ? this.botPlayer : this.botMaze;
    this.topOverlap = (this.topMaze < this.topPlayer) ? this.topPlayer : this.topMaze;
    
    this.mtlX = this.leftOverlap - this.leftMaze;
    this.mtlY = this.topOverlap - this.topMaze;
    this.mbrX = this.rightOverlap - this.leftMaze;
    this.mbrY = this.botOverlap - this.topMaze-1;
    this.ptlX = this.leftOverlap - this.leftPlayer;
    this.ptlY = this.topOverlap - this.topPlayer;
    
    this.widthOverlap = this.rightOverlap - this.leftOverlap;
    this.foundCollision = false;
    
    this.maze.loadPixels();
    this.player.loadPixels();
    
    this.surfaceWidthMaze = this.maze.width;
    this.surfaceWidthPlayer = this.player.width;
    
    this.pixelMazeTransparent = true;
    this.pixelPlayerTransparent = true;
    
    this.pixelMaze = (this.mtlY * this.surfaceWidthMaze) + this.mtlX;
    this.pixelPlayer = (this.ptlY * this.surfaceWidthPlayer) + this.ptlX;
    
    this.mx = this.mtlX;
    this.my = this.mtlY;
    this.px = this.ptlX;
    this.py = this.ptlY;
    
    for (this.my = this.mtlY; this.my < this.mbrY; this.my++) {
      this.px = this.ptlX;
      for (this.mx = this.mtlX; this.mx < this.mbrX; this.mx++) {
        this.pixelMazeTransparent = alpha(this.maze.pixels[this.pixelMaze]) < this.ALPHALEVEL;
        this.pixelPlayerTransparent = alpha(this.player.pixels[this.pixelPlayer]) < this.ALPHALEVEL;
        
        if (!this.pixelMazeTransparent && !this.pixelPlayerTransparent) {
          this.foundCollision = true;
          break;
        }
        
        this.pixelMaze++;
        this.pixelPlayer++;
        this.px++;
      }
      if (this.foundCollision) break;
      this.pixelMaze = this.pixelMaze + this.surfaceWidthMaze - this.widthOverlap;
      this.pixelPlayer = this.pixelPlayer + this.surfaceWidthPlayer - this.widthOverlap;
      this.py++;
    }
    
    return this.foundCollision;
  }

  this.mazeEnd = function() {
    // reach end
    if (player.playerX > 868 && player.playerX < width && player.playerY > 175 && player.playerY < 255) {
      lost = true;
      lives -= 1;
    }
    else if (this.pixelCollision(this.mazeImage, 0, 0, player.playerImage, player.playerX, player.playerY)) {
      lost = true;
      lives -= 1;
    }
  }
  
}
