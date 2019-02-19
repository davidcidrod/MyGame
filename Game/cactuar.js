'use strict'

class Cactuar{
    constructor(canvas, x, y){
        this.size = 60;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.direction = 1;
        this.image;
    }

    update(){
        this.x = this.x + this.direction * this.speed;
    }
    draw(){
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y - this.size/2, this.y - this,size/2, this.size, this.size);

    }
    outCanvasCactuar(){
        if(this.x < 0){
            return true;
        };
    }
    checkShootEnemy(enemy){
        const collEnemyRight = this.x + this.size / 2 > enemy.x - enemy.size/ 2;
        const collEnemyLeft = this.x - this.size / 2 < enemy.x + enemy.size/ 2;
        const collEnemyTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
        const collEnemyBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;
    
        if(collEnemyRight && collEnemyLeft && collEnemyTop && collEnemyBottom) {
          return true;
        }
    
        return false;
    }
}