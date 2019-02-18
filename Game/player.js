'use strict'

class Player{
    constructor(canvas, lives) {
      this.size = 100;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.x = 10 + this.size/2;
      this.y = this.canvas.height/2;
      this.width = this.size;
      this.speed = 5;
      this.directionX = 0;
      this.directionY = 0;
      this.lives = lives;
    }
    //
    update() {
      //console.log(this.speed)
      this.y = this.y + this.directionY * this.speed;
      this.x = this.x + this.directionX * this.speed;
      
    };
    //
    draw() {
      this.ctx.fillStyle = 'green';
      //this.ctx.fillRect( this.x - this.size/2, this.y - this.size/2, this.size, this.size)
      var img = new Image();
      //img.src = "http://rs17.pbsrc.com/albums/b89/miertje86/Final%20Fantasy%20Gifs/FF-GoldChocobo.gif~c200";
      img.src="./Img/FF-Gold-Right.gif";
      this.ctx.drawImage(img, this.x - this.size/2, this.y - this.size/2, this.size,this.size); 
         
    };   
  
  
    
    //direccion del player
    setDirection(directiony, directionx) {
      this.directionX = directionx;
    
      this.directionY = directiony;
      
    }
  
    checkScreen() {
      var top = this.canvas.x = 350;
      var bot = this.canvas.x = 800;
   // SI EL BUFFER EN LO QUE LLEGA AL BORDE NO ES ACTUALIZADO Y SIGUE SIENDO POSITIVO, ENTRA HASTA QUE SE ACTUALIZA Y HACE TOPE.
      var dire = this.directionY;
      
      if (this.directionY < 0) {
        if (this.y - this.size/2 <= top) {
          this.directionY = 0;
        };
      };
      if (this.directionY > 0) {
        if (this.y + this.size/2 >= bot) {
          this.directionY = 0;       
        };
      };
     
      if (this.directionX < 0) {
        console.log(this.x);
        if (Math.min(this.x) - this.size/2 <= 0) {
          this.directionX = 0;
          this.x = 0 + this.size/2;
          //console.log("a es: " + this.directionX);
        };
      };
      if (this.directionX > 0) {
        if (this.x + this.size/2 >= this.canvas.width) {
          this.directionX = 0;
          //console.log(this.directionX);
          
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
  

  };