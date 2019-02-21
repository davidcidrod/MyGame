'use strict'

class Bonus{
    constructor(canvas, y){
      this.size = 60;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.x = this.canvas.width;
      this.y = y;
      this.speed = 5;
      this.direction = -1;
      this.lives = 0;
      //this.randomimage = randomimage;
      this.image = ["./Img/moguri/frame-1-moguri.gif","./Img/moguri/frame-2-moguri.gif","./Img/moguri/frame-3-moguri.gif","./Img/moguri/frame-4-moguri.gif","./Img/moguri/frame-5-moguri.gif","./Img/moguri/frame-6-moguri.gif","./Img/moguri/frame-7-moguri.gif","./Img/moguri/frame-8-moguri.gif","./Img/moguri/frame-9-moguri.gif","./Img/moguri/frame-10-moguri.gif","./Img/moguri/frame-11-moguri.gif","./Img/moguri/frame-12-moguri.gif","./Img/moguri/frame-13-moguri.gif","./Img/moguri/frame-14-moguri.gif","./Img/moguri/frame-15-moguri.gif","./Img/moguri/frame-16-moguri.gif"];
      this.imageBonus = new Image();
      this.imageBonus.src = this.image[0];
      this.counter = 0;
      this.imageFrame = 0;
      
      
    };
    
    update(speed) {
      this.x = this.x + this.direction * speed;

    };
  
    draw() {
    
      this.counter++;
      if (this.counter === 3 && this.imageFrame <15) {
        this.imageFrame++
        this.imageBonus.src = this.image[this.imageFrame]
        this.counter = 0;
      } else if (this.counter === 3 && this.imageFrame === 15 ) {
        this.imageFrame = 0;
        this.imageBonus.src = this.image[this.imageFrame]
        this.counter = 0;
      } 
    /* 
      var img = new Image();
      img.src="https://66.media.tumblr.com/0e90b634fa8533558a660a092dc88343/tumblr_oo3nm2yevm1w83qhyo1_400.gif";  */     
      this.ctx.drawImage(this.imageBonus, this.x - this.size/2, this.y - this.size/2, 80,80); 
    };
    
  
  
};