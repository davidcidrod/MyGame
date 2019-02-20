'use strict'


const main = () => {
    //construimos el dom
    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        return main;
    };
    //construimos la pantalla de inicio
    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
        <section class="splash-screen">
            <h1>Choco Sprint</h1>
            <button class="startbutton" >Start Engine</button>
        </section>       
        `);

        const startEngineButton = document.querySelector('button');
        startEngineButton.addEventListener('click',builGameScreen);
        

       // setInterval(buildGameScreen(),50);
    };

    //construimos la pantalla del juego
    const builGameScreen = () => {
        const gameScreen = buildDom(`
        <section class="game-screen">
            <canvas></canvas>
         </section>
        `);
        const audio = new Audio;
        audio.src = './Game/audio/ChocoboTheme.mp3';
        audio.play();
    

        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width',width);
        canvasElement.setAttribute('height',height);

        

        const game = new Game(canvasElement);
        game.gameOverCallback(buildGameOver);

        game.startLoop();
                // hacer el movimiento.
            function moveUp() {
                game.player.setDirection(-1,0);
                game.checBorderCollision();
            }
        
            function moveDown() {
                game.player.setDirection(1,0);
                game.checBorderCollision();       
            }
        
            function moveLeft() {
                
                game.player.setDirection(0,-1);
                game.checBorderCollision();
            }
        
            function moveRight() {
                   
                game.player.setDirection(0,1);
                game.checBorderCollision();
            }
            
    
            document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 38:
                    moveUp();
                break;
                case 40:
                    moveDown();
                break;
                case 37:
                    moveLeft();
                break;
                case 39:
                    moveRight();
                break;
                
            }
            }
            document.onkeyup = function(e) {
            stopMove();
            }
    
            function stopMove() {
                game.player.setDirection(0,0);
    
            };
            document.onkeypress = function(e){
                if(e.keyCode === 32){
                    cactuarShoot();
                }
            };
            function cactuarShoot(){
                game.cactuar();
            };
        };

    const buildGameOver = () => {
        const gameOverScreen = buildDom(`
        <section class="game-over">
            <h1>Game Over Screen</h1>
            <button>Restart</button>
        </section>
        `);

    
        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click',  builGameScreen);
    };

    buildSplashScreen();

};

window.addEventListener('load', main);
