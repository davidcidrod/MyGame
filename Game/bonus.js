'use strict'

class Bonus{
    constructor(canvas, y){
      this.size = 70;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.x = this.canvas.width;
      this.y = y;
      this.speed = 5;
      this.direction = -1;
      this.lives = 0;
      //this.randomimage = randomimage;
      
    };
    
    update(speed) {
      this.x = this.x + this.direction * speed;

    };
  
    draw() {
      this.ctx.fillStyle = 'red';
      
      var img = new Image();
      img.src="https://66.media.tumblr.com/0e90b634fa8533558a660a092dc88343/tumblr_oo3nm2yevm1w83qhyo1_400.gif";      
      this.ctx.drawImage(img, this.x - this.size/2, this.y - this.size/2, this.size,this.size); 
    };
    
  
  
};