'use strict'

class Background{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.image ='https://cdn.discordapp.com/attachments/290121015344758785/546489984144769035/paint.jpg';
        this.bckgroundX= 0;
        this.bckgroundSpeed = -1;
    }
    movebackground(){
        this.bckgroundX += this.bckgroundSpeed;
        this.bckgroundX %= this.canvas.width;
    } 
    draw(){
        var img= new Image();
        //img.src= 'https://cdn.discordapp.com/attachments/290121015344758785/546489984144769035/paint.jpg';
        img.src = this.image;
        this.ctx.drawImage(img, this.bckgroundX, 0);
        if (this.bckgroundSpeed < 0) {
            this.ctx.drawImage(img, this.bckgroundX + this.canvas.width, 0);
        } else {
            this.ctx.drawImage(img, this.bckgroundX - this.img.width, 0);
        };
    }

}