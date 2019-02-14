Readme

Titulo:

Descripción: 

Hacer un juego en el que manejas un coche y no debes colisionar con los otros. Los vehículos de la carretera se acercan y debes esquivarlos sino pierdes vidas. Dispones de X vidas y por cada colision pierdes una. Los coches a los que rebasas te suman puntos y cada ciertos puntos los vehículos irán mas rápidos o aumentara el tamaño.

M.V.P- Tecnologia

Hacer las 3 pantallas conDom
Hacer el juego en Canvas. El coche(player), estará a la izquierda y podrá moverse hacia arriba y abajo. El player estará dentro de una carretera y se dirigirán vehículos(enemigos) hacia él. El player dispondrá de 3 vidas y si colisiona con algún enemigo perderá una.  
Estructuras de Datos:
Definición de clases y métodos.
Game.js
Player.js
Enemy.js
Class Game{







Class Player{
 this.x
 this.y
 this.direction
 this.size
 this.speed
 this.lives
Class Enemy{
 this.x
 this.y
 this.size
 this.speed
 this.direction
startLoop()
update()
clear()
draw()
checkCollision()
gameOverCallback()
update()
draw()
setDirection()
checkScreen()
collisionEnemy()
loseLives()
update()
draw()

States y States Transitions:
Definicion del las transiciones del juego y del main.
    • SplashScreen
          Pantalla de inicio con botón de start que inicia el gameScreen. 
    • GameScreen
          Pantalla de juego, contendrá el canvas con el juego y un score y un lives.
    • GameoverScreen
          Pantalla del fin de juego. Tendrá tu score y un botón para restart.
      
funciones de transición: Las transiciones se harán al hacer click en los botones. En el botón start llevara al juego. En el juego al perder todas las vidas se hará una transición al game Over. El botón restart de game over llevará otra vez al juego.
Task:
Definición de las tareas por orden de prioridad
construir el Dom
construir el jugador
Animar el jugador
construir el enemigo
Animar los enemigos
Chequeo de las colisiones
Perder vidas
Puntuación
Subir dificultad
Backlog
apariencia del juego
apariencia de las pantallas de inicio y game over
//opcional +
Dar movimiento hacia delante y hacia atrás (“acelerar”y “frenar)


 
