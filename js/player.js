function Player(game) {
    this.game = game;
   
    this.x = 0;
    this.y = 30;

    //last position
    this.lx = this.x;
    this.ly = this.y;
  
    this.img = new Image();
    this.img.src = 'img/player.png';
    
    // medidas de la imagen a representar en el canvas
    this.w = 20;
    this.h = 35;

    //velocidad
    this.vx = 5;
    this.vy = 5;

    this.keys = [];
    this.jumping = false;
    this.jumpDown = false;
    this.dashDown = false;

    this.collectableItems = [];

    this.abailableDash = true;
    this.dashVelocity = 20;

    this.setListeners();

}

/*
    Dibuja el personaje en pantalla
*/
Player.prototype.draw = function() {
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
        );
}

/*
    Mueve hacia la derecha y si detecta una colision vuelve a la posicion anterior
*/
Player.prototype.moveRight = function(){
    this.lx = this.x
    this.x += this.vx;
    if(this.platformColision()){
        this.x = this.lx
    }

}

/*
    Mueve hacia la izquierda y si detecta una colision vuelve a la posicion anterior
*/
Player.prototype.moveLeft = function(){
    this.lx = this.x
    this.x -= this.vx;
    if(this.platformColision()){
        this.x = this.lx
    }
}

/*
    Salta si le esta permitido
*/
Player.prototype.jump = function(){
    if(!this.jumping){
        this.jumping = true;
        this.vy -= 20;
    }
}

/*
    Salta si le esta permitido
*/
Player.prototype.dash = function(){
    if(this.abailableDash && this.keys[this.game.keys.LEFT_KEY]){
        for(var i=0; i<=this.dashVelocity; i++){
            this.lx = this.x
            this.x -= i;
            if(this.platformColision()){
                this.x = this.lx
            }
        }
    } else if(this.abailableDash && this.keys[this.game.keys.RIGHT_KEY]){
        for(var i=0; i<=this.dashVelocity; i++){
            this.lx = this.x
            this.x += i;
            if(this.platformColision()){
                this.x = this.lx
            }
        }
    }
}

Player.prototype.move = function(){
    if (this.keys[this.game.keys.LEFT_KEY]) {
        this.moveLeft();
    } else if (this.keys[this.game.keys.RIGHT_KEY]) {
        this.moveRight();
    }
}

/*
    Captura las pulsaciones de teclas
    Se guarda en un array la tecla pulsada en la posicion keycode con valor true en caso de que este pulsada
    Si se deja de pulsar, si quita del array la posicion keycode
    En caso de que se pulse espacio comprueba que tengas que levantar la tecla para volver a saltar
*/
Player.prototype.setListeners = function() {
    document.onkeydown = (function (e) {
        if (e.keyCode == this.game.keys.SPACE) {
            if(!this.jumpDown){
                this.jump();
                this.jumpDown = true;
            }
        } else if (e.keyCode == this.game.keys.D_KEY) {
            if(!this.dashDown){
                this.dash();
                this.dashDown = true;
            }
        } else {
            this.keys[e.keyCode] = true;
        }
    }.bind(this));

    document.onkeyup = (function (e) {
        if (e.keyCode == this.game.keys.SPACE) {
            this.jumpDown = false;
        }else if (e.keyCode == this.game.keys.D_KEY) {
            this.dashDown = false;
        }else {
            delete this.keys[e.keyCode];
        }
    }.bind(this));
}

/*
   Para la gravedad se da aceleracion aumentando la velocidad
   Se cambia la posicion sumando la velocidad a la posicion
   Se controla que haya colision con el suelo para podel saltar
   Si hay colision vuelvo a la posicion anterior y pongo la velocidad se resetea
*/
Player.prototype.gravity = function(){
    this.ly = this.y;
    this.vy += 1.5;
    this.y += this.vy;
    if(this.platformColisionFloor()){
        this.jumping = false;
    }
    if(this.platformColision()){
        this.y = this.ly;
        this.vy = 0;
    }
}

/*
    Coprueba si hay colision y devuelve el elemento con el que colisiona
*/
Player.prototype.platformColisionElem = function(elements){
    var col = false;
    var p = undefined;
    this.game.platforms.forEach(function(platform){
        if (this.x + this.w >= platform.x &&
            platform.x + platform.w >= this.x &&
            this.y + this.h >= platform.y &&
            platform.y + platform.h >= this.y
            ){
               p = platform
            }
    }.bind(this))
    return p;
}

/*
    Coprueba si hay colision y devuelve true
*/
Player.prototype.platformColision = function(elements){
    var col = false
    this.game.platforms.forEach(function(platform){
        if (this.x + this.w > platform.x &&
            platform.x + platform.w >= this.x &&
            this.y + this.h > platform.y &&
            platform.y + platform.h > this.y
            ){
              col = true;
            }
    }.bind(this))
    return col;
}

/*
    Coprueba si hay colision con la base, como si fuese el suelo
*/
Player.prototype.platformColisionFloor = function(){
    var col = false
    this.game.platforms.forEach(function(platform){
        if (this.x + this.w > platform.x &&
            platform.x + platform.w >= this.x &&
            this.y + this.h> platform.y &&
            platform.y + platform.h > this.y + this.h
            ){
              col = true;
            }
    }.bind(this))
    return col;
}

/*
    Coprueba si hay colision con el item y devuelve true
*/
Player.prototype.itemColision = function(elements){
    var col = -1
    this.game.collectableItems.forEach(function(item, index){
        if (this.x + this.w > item.x &&
            item.x + item.w >= this.x &&
            this.y + this.h > item.y &&
            item.y + item.h > this.y
            ){
              col = index;
            }
    }.bind(this))
    return col;
}

