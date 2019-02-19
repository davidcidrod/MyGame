'use strict'

class Player{
    constructor(canvas, lives) {
      this.size = 100;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.x = 10 + this.size/2;
      this.y = this.canvas.height/2;
      this.width = this.size;
      this.speed = 8;
      this.directionX = 0;
      this.directionY = 0;
      this.lives = lives;
      this.top=350;
      this.bot=800;
      this.image = ["./Img/frame-1.gif","./Img/frame-2.gif","./Img/frame-3.gif","./Img/frame-4.gif"]
      
    }
    //
    update() {
      
      this.y = this.y + this.directionY * this.speed;
      this.x = this.x + this.directionX * this.speed;
      
    };
    //
    draw() {
     
      /* var img = new Image();
      //img.src = "http://rs17.pbsrc.com/albums/b89/miertje86/Final%20Fantasy%20Gifs/FF-GoldChocobo.gif~c200";
      img.src="./Img/FF-Gold-Right.gif";
      this.ctx.drawImage(img, this.x - this.size/2, this.y - this.size/2, this.size,this.size); 
          */
      let randomImagePlayer = Math.floor((Math.random() * 3));
      
      var img = new Image();
      
      img.src=this.image[randomImagePlayer];
      this.ctx.drawImage(img, this.x - this.size/2, this.y - this.size/2, this.size,this.size); 
         
    };   
  
  
    
    //direccion del player
    setDirection(directiony, directionx) {
      this.directionX = directionx;
    
      this.directionY = directiony;
      
    }
  
    checkScreen() {
      
   
      var dire = this.directionY;
      
      if (this.directionY < 0) {
        if (this.y - this.size/2 <= this.top) {
          this.directionY = 0;
        };
      };
      if (this.directionY > 0) {
        if (this.y + this.size/2 >= this.bot) {
          this.directionY = 0;       
        };
      };
     
      if (this.directionX < 0) {
        
        if (Math.min(this.x) - this.size/2 <= 0) {
          this.directionX = 0;
          this.x = 0 + this.size/2;
          
        };
      };
      if (this.directionX > 0) {
        if (this.x + this.size/2 >= this.canvas.width) {
          this.directionX = 0;
          
          
        };
      };
      
    };
      //colisiones
    checkCollisionEnemy(enemy) {
      const collEnemyRight = this.x + this.size / 2 > enemy.x - enemy.size/ 2;
      const collEnemyLeft = this.x - this.size / 2 < enemy.x + enemy.size/ 2;
      const collEnemyTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
      const collEnemyBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;
  
      if(collEnemyRight && collEnemyLeft && collEnemyTop && collEnemyBottom) {
        return true;
      }
  
      return false;
    }
  
    loseLive() {
      this.lives--;
    }
    checkCollisionBonus(bonus) {
      const collBonusRight = this.x + this.size / 2 > bonus.x - bonus.size/ 2;
      const collBonusLeft = this.x - this.size / 2 < bonus.x + bonus.size/ 2;
      const collBonusTop = this.y - this.size / 2 < bonus.y + bonus.size / 2;
      const collBonusBottom = this.y + this.size / 2 > bonus.y - bonus.size / 2;
  
      if(collBonusRight && collBonusLeft && collBonusTop && collBonusBottom) {
        return true;
      }
  
      return false;
    }
  
    bonusLive() {
      this.lives++;
    }
    cactuar(){
      return new Cactuar(this.canvas, this.x + this.size/2, this.y);
    }
  

  };