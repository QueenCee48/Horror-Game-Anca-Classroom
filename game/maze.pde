public class maze {
  private game game;
  private PImage maze;
  
  final int ALPHALEVEL = 20;
  
  public maze(game game) {
    this.game = game;
    maze = loadImage("maze.png");
  }
  
  public void drawMaze() {
    image(maze,0,0);
    
    //start box
    fill(0,100,0);
    textSize(30);
    text("START",0,height/2-45);
    rectMode(CENTER);
    fill(0,100,0);
    rect(40, height/2, 80, 80);
    
    //end box
    fill(0,100,0);
    textSize(30);
    text("END",width-65,height/2-45);
    rectMode(CENTER);
    fill(0,100,0);
    rect(width-40, height/2, 80, 80);
  }
  
  public void mazeEnd() {
    // reach end
    if (player.playerX > 868 && player.playerX < width && player.playerY > 175 && player.playerY < 255) {
      lost = true;
      lives -= 1;
    }
    else if (pixelCollision(maze, 0, 0, player.player, player.playerX, player.playerY)) {
      lost = true;
      lives -= 1;
    }
  }
  
  public boolean pixelCollision(PImage maze, float mazeX, float mazeY, PImage player, float playerX, float playerY) {
    int topMaze, botMaze, leftMaze, rightMaze;
    int topPlayer, botPlayer, leftPlayer, rightPlayer;
    int topOverlap, botOverlap, leftOverlap, rightOverlap;
    int mx, my;
    int px, py;
    int mtlX, mtlY, mbrX, mbrY;
    int ptlX, ptlY, pbrX, pbrY;
    
    topMaze = (int) mazeY;
    botMaze = (int) mazeY + maze.height;
    leftMaze = (int) mazeX;
    rightMaze = (int) mazeX + maze.width;
    topPlayer = (int) playerY;
    botPlayer = (int) playerY + player.height;
    leftPlayer = (int) playerX;
    rightPlayer = (int) playerX + player.width;
    
    if (botMaze <= topPlayer || botPlayer <= topMaze || rightMaze <= leftPlayer || rightPlayer <= leftMaze)
      return false;
      
    leftOverlap = (leftMaze < leftPlayer) ? leftPlayer : leftMaze;
    rightOverlap = (rightMaze > rightPlayer) ? rightPlayer : rightMaze;
    botOverlap = (botMaze > botPlayer) ? botPlayer : botMaze;
    topOverlap = (topMaze < topPlayer) ? topPlayer : topMaze;
    
    mtlX = leftOverlap - leftMaze;
    mtlY = topOverlap - topMaze;
    mbrX = rightOverlap - leftMaze;
    mbrY = botOverlap - topMaze-1;
    ptlX = leftOverlap - leftPlayer;
    ptlY = topOverlap - topPlayer;
    
    int widthOverlap = rightOverlap - leftOverlap;
    boolean foundCollision = false;
    
    maze.loadPixels();
    player.loadPixels();
    
    int surfaceWidthMaze = maze.width;
    int surfaceWidthPlayer = player.width;
    
    boolean pixelMazeTransparent = true;
    boolean pixelPlayerTransparent = true;
    
    int pixelMaze = (mtlY * surfaceWidthMaze) + mtlX;
    int pixelPlayer = (ptlY * surfaceWidthPlayer) + ptlX;
    
    mx = mtlX;
    my = mtlY;
    px = ptlX;
    py = ptlY;
    
    for (my = mtlY; my < mbrY; my++) {
      px = ptlX;
      for (mx = mtlX; mx < mbrX; mx++) {
        pixelMazeTransparent = alpha(maze.pixels[pixelMaze]) < ALPHALEVEL;
        pixelPlayerTransparent = alpha(player.pixels[pixelPlayer]) < ALPHALEVEL;
        
        if (!pixelMazeTransparent && !pixelPlayerTransparent) {
          foundCollision = true;
          break;
        }
        
        pixelMaze++;
        pixelPlayer++;
        px++;
      }
      if (foundCollision) break;
      pixelMaze = pixelMaze + surfaceWidthMaze - widthOverlap;
      pixelPlayer = pixelPlayer + surfaceWidthPlayer - widthOverlap;
      py++;
    }
    
    return foundCollision;
  }
  
}
