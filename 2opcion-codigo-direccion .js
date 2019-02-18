//Otra manera de hacer el movimiento pero se sigue pasando del limite si va con acceleracion.
/*
            
let rigthPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

function keyDownhandler(e){
    if(e.key == "ArrowRight"){
        rigthPressed = true;
        game.player.setDirection(0,1);
        game.checBorderCollision();
        
    }
    if(e.key == "ArrowLeft"){
        leftPressed = true;
        game.player.setDirection(0,-1);
        game.checBorderCollision();
    }
    if(e.key == "ArrowUp"){
        upPressed = true;
        game.player.setDirection(-1,0);
        game.checBorderCollision(); 
    }
    if(e.key == "ArrowDown"){
        downPressed = true;
        game.player.setDirection(1,0);
        game.checBorderCollision()
    }
}
function keyuphandler(e){
    if(e.key == "ArrowRight"){
        rigthPressed = false;
        game.player.setDirection(0,0)
    }
    if(e.key == "ArrowLeft"){
        leftPressed = false;
        game.player.setDirection(0,0)
    }
    if(e.key == "ArrowUp"){
        upPressed = false;
        game.player.setDirection(0,0)
    }
    if(e.key == "ArrowDown"){
        downPressed = false;
        game.player.setDirection(0,0)
    }
}
document.addEventListener("keydown", keyDownhandler, false);
document.addEventListener("keyup", keyuphandler, false);
    */

//BONUS
//En player.js
checkCollisionBonus(bonus) {
    const collideRight = this.x + this.size / 2 > bonus.x - bonus.size/ 2;
    const collideLeft = this.x - this.size / 2 < bonus.x + bonus.size/ 2;
    const collideTop = this.y - this.size / 2 < bonus.y + bonus.size / 2;
    const collideBottom = this.y + this.size / 2 > bonus.y - bonus.size / 2;

    if(collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }

    return false;
  }

  bonusLive() {
    this.lives++;
  }

//En Game.js

//en
updateCanvas(){
   

    this.bonus.forEach((bonus)) => {
        bonus.update(this.speed);
    }

};

drawCanvas(){
    
    this.bonus.forEach((bonus) => {
        bonus.draw();
    });
      
    
};

checkBonusCollisions() {
     
   
    this.bonus.forEach((bonus, index) =>{
      if (this.player.checkCollisionEnemy(bonus)) {
        this.player.bonusLive();        
        this.bonus.splice(index, 1);

        
      };
      if (bonus.x <= 0 ){
        this.enemies.splice(index, 1);
        
        
        };
      };
      
    });

