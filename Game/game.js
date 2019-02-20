'use strict'

class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.background;
        this.enemies=[];
        this.isGameOver = false;
        this.points = 0;
        this.speed = 5;
        this.bonus =[];
        this.top = 350;
        this.bot =800;
        this.cactuars=[];

    };
    startLoop() {
        this.background = new Background(this.canvas);
        this.player = new Player(this.canvas, 3);

        const loop = () => {

            if(Math.random() > 0.95) {
        
                var aleat = Math.random() * this.canvas.height;
                
                if (aleat <= this.bot && aleat >= this.top){
                    const y = aleat;
                    var randomimage = Math.floor((Math.random() * 3));
                    
                    this.enemies.push(new Enemy(this.canvas, y,randomimage));
                };
            };
            
            if(Math.random() > 0.98) {
        
                var aleat1 = Math.random() * this.canvas.height;
                
                if (aleat1 <= this.bot && aleat1 >= this.top){
                    const y = aleat1;
                                        
                    this.bonus.push(new Bonus(this.canvas, y));
                }; 
            };    

            this.checkEnemiesCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.checBorderCollision();
            this.drawCanvas();
            this.checkScoreToSpeed();
            this.checkBonusCollisions() 

            if(!this.isGameOver) {
                window.requestAnimationFrame(loop);
               
            };
        };
        
        window.requestAnimationFrame(loop);
    };

    updateCanvas(){
        this.player.update();
        
        this.bonus.forEach((bonus) => {
            bonus.update(this.speed);
        });
        this.enemies.forEach((enemy) => {
            enemy.update(this.speed);
        });
        this.background.movebackground();//llamada a move del background
        //disparos cactuar
        this.cactuars.forEach((cactuar) => {
            cactuar.update();
        });
        this.cactuars.forEach((cactuar) => {
            if(cactuar.outCanvasCactuar()){
                this.cactuars.splice(this.cactuars.indexOf(cactuar),1);
            };
        });
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    };

    drawCanvas(){
        this.background.draw();
        this.player.draw();
       

        this.enemies.forEach((enemy) => {
            enemy.draw();
            
        });

        this.bonus.forEach((bonus) => {
            bonus.draw();
        });
        
        this.cactuars.forEach((cactuar) =>{
            cactuar.draw();
        });

        this.ctx.font = "50px Arial";
        this.ctx.fillText("Score: "+ this.points   , 30, 100); //("",x,y)
        this.ctx.font = "50px Arial";
        this.ctx.fillText("Lives: "+ this.player.lives   , this.canvas.width - 300, 100); //("",x,y)
        
        this.ctx.beginPath();
        this.ctx.moveTo(0,850);
        this.ctx.lineTo(this.canvas.width,850);
        this.ctx.stroke();
    };

    checkEnemiesCollisions() {
        
        this.enemies.forEach((enemy, index) =>{
          if (this.player.checkCollisionEnemy(enemy)) {
            this.player.loseLive();        
            this.enemies.splice(index, 1);
    
            if (this.player.lives === 0) {
              this.isGameOver = true;
              this.onGameOver();
            };
          };
          if (enemy.x <= 0 ){
            this.enemies.splice(index, 1);
            this.points++;
            
            if (this.points%25 == 0){    
           
              this.speed += 5;
            };  
          };
          
        });
        // collisions
        //collision Cactuar
        this.enemies.forEach((enemy) => {
            this.cactuars.forEach((cactuar) => {
                if(cactuar.checkShootEnemy(enemy)){
                    this.enemies.splice(this.enemies.indexOf(enemy),1);
                    this.cactuars.splice(this.cactuars.indexOf(cactuar),1);
                    this.points +=1;
                };
            });
        });
    };
    checBorderCollision(){
        this.player.checkScreen();
    
    };
    
    gameOverCallback(callback) {
        this.onGameOver = callback;
    };
     
    checkScoreToSpeed() {
        /* 
            if (this.points%25 == 0 ){
            this.speed += 1;
        }; */
    };
    
    checkBonusCollisions() {
     
   
        this.bonus.forEach((bonus, index) =>{
          if (this.player.checkCollisionEnemy(bonus)) {
            this.player.bonusLive();        
            this.bonus.splice(index, 1);
    
            
        };
          if (bonus.x <= 0 ){
            this.bonus.splice(index, 1);
            
        };
                  
        });
    };
    cactuar(){
        if(this.player.cactuarBullet > 0){
          this.cactuars.push(new Cactuar(this.player.canvas, this.player.x + this.player.size/2, this.player.y));
          this.player.cactuarBullet--;
        }
      }
            
};
