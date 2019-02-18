'use strict'

class Enemy {
    constructor(canvas, y, randomimage) {
      this.size = 80;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.x = this.canvas.width;
      this.y = y;
      this.speed = 5;
      this.direction = -1;
      this.points = 0;
      this.image = ["http://rs241.pbsrc.com/albums/ff232/OnelaSprites/Sprites%20-%20FF%20Chocobos/ff-chocobo-02.gif~c200","https://thumbs.gfycat.com/SingleMelodicHoiho.webp","https://thumbs.gfycat.com/AliveAdventurousGrunion.webp"] ;
      this.randomimage = randomimage;
      
    };
    
    update(speed) {
      this.x = this.x + this.direction * speed;
    };
  
    draw() {
      this.ctx.fillStyle = 'red';
      //this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size);
      var img = new Image();
      
      img.src = this.image[this.randomimage];
      this.ctx.drawImage(img, this.x - this.size/2, this.y - this.size/2, this.size,this.size); 
    };
  
  
}