'use strict'

class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.enemies=[];
        this.isGameOver = false;
        this.points = 0;
        this.speed = 5;
        this.bonus =[];
        this.top = 350;
        this.bot =800;

    };
    startLoop() {
        this.player = new Player(this.canvas, 3);

        const loop = () => {

            if(Math.random() > 0.96) {
        
                /* var top = this.canvas.y = 350;
                var bot = this.canvas.y = 800; */
                var aleat = Math.random() * this.canvas.height;
                
                if (aleat <= this.bot && aleat >= this.top){
                    const y = aleat;
                    var randomimage = Math.floor((Math.random() * 3));
                    //console.log(randomimage);
                    this.enemies.push(new Enemy(this.canvas, y,randomimage));
                };
            };
            
            if(Math.random() > 0.9985) {
        
                var top1 = this.canvas.x = 350;
                var bot1 = this.canvas.x = 800;
                var aleat1 = Math.random() * this.canvas.height;
                
                if (aleat1 <= bot1 && aleat1 >= top1){
                    const y = aleat1;
                    //var randomimage = Math.floor((Math.random() * 3));
                    
                    this.bonus.push(new Bonus(this.canvas, y));
                }; 
            };    

            this.checkEnemiesCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.checBorderCollision();
            this.drawCanvas();
            //this.checkScoreToSpeed();
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
            //console.log(enemy.speed);
              enemy.update(this.speed);
        });
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    };

    drawCanvas(){
        this.player.draw();
       
        this.bonus.forEach((bonus) => {
            bonus.draw();
        });
        
        this.enemies.forEach((enemy) => {
            enemy.draw();
            
        });
        this.ctx.font = "50px Arial";
        this.ctx.fillText("Score: "+ this.points   , 30, 100); //("",x,y)
        this.ctx.font = "50px Arial";
        this.ctx.fillText("Lives: "+ this.player.lives   , this.canvas.width - 300, 100); //("",x,y)
        
        this.ctx.beginPath();
        this.ctx.moveTo(0,900);
        this.ctx.lineTo(this.canvas.width,900);
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
    };
    checBorderCollision(){
        this.player.checkScreen();  
       // console.log(this.player.checkScreen());
       //console.log(this.player.x);
    };
    
    gameOverCallback(callback) {
        this.onGameOver = callback;
    };
    /* 
    checkScoreToSpeed() {
        
            if (Game.points%25 == 0 ){
            this.speed += 5;
        };
    }; */
    
    checkBonusCollisions() {
     
   
        this.bonus.forEach((bonus, index) =>{
          if (this.player.checkCollisionEnemy(bonus)) {
            this.player.bonusLive();        
            this.bonus.splice(index, 1);
    
            
        };
          if (bonus.x <= 0 ){
            this.enemies.splice(index, 1);
            
            
        };
        
          
        });
    };
            
};
