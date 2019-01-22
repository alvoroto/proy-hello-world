function Player(game) {
    this.game = game;
   
    this.x = 0;
  
    // guardar posición original (suelo)
    this.y0 = this.game.canvas.height * 0.8;
    this.y = 30;
  
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
    this.setListeners();

}

Player.prototype.draw = function() {
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
        );
}

Player.prototype.moveRight = function(){
    var cop = Object.assign({}, this);
    this.x += this.vx;
    if(this.colision()){
        this.x = cop.x
    }

}

Player.prototype.moveLeft = function(){
    var cop = Object.assign({}, this);
    this.x -= this.vx;
    if(this.colision()){
        this.x = cop.x
    }
}

Player.prototype.jump = function(){
    if(!this.jumping){
        this.jumping = true;
        this.vy -= 20;
    }
}

Player.prototype.move = function(){
    if (this.keys[this.game.keys.LEFT_KEY]) {
        this.moveLeft();
    } else if (this.keys[this.game.keys.RIGHT_KEY]) {
        this.moveRight();
    }
    // if (this.keys[this.game.keys.SPACE] && !this.jumping) {
    //     this.jump();
    // }

}

Player.prototype.setListeners = function() {
    console.log(this.jumpDown)
    document.onkeydown = (function (e) {
        if (e.keyCode == this.game.keys.SPACE) {
            if(!this.jumpDown){
                this.jump();
                this.jumpDown = true;
            }
        } else{
            this.keys[e.keyCode] = true;
        }
    }.bind(this));

    document.onkeyup = (function (e) {
        if (e.keyCode == this.game.keys.SPACE) {
            this.jumpDown = false;
        }else {
            delete this.keys[e.keyCode];
        }
    }.bind(this));

    // document.onkeypress = (function (e) {
    //     if (e.keyCode == this.game.keys.SPACE && !this.jumping) {
    //         this.jump();
    //     } 
    // }.bind(this));

}

Player.prototype.gravity = function(){
    var cop = Object.assign({}, this);
    this.vy += 1.5;
    this.y += this.vy;
    if(this.colisionFloor()){
        this.jumping = false;
    }
    if(this.colision()){
        this.y = cop.y
        this.vy = 0;
    }
    

}

Player.prototype.colisionElem = function(){
    var col = false
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

Player.prototype.colision = function(){
    var col = false
    var p = undefined;
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

Player.prototype.colisionFloor = function(){
    var col = false
    var p = undefined;
   
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

