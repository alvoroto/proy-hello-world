function Player(game) {
    this.game = game;
   
    this.x = this.game.canvas.width * 0.08;
  
    // guardar posición original (suelo)
    this.y0 = this.game.canvas.height * 0.8;
    this.y = this.y0;
  
    this.img = new Image();
    this.img.src = 'img/player.png';
    
    // medidas de la imagen a representar en el canvas
    this.w = 20;
    this.h = 35;

    //velocidad
    this.vx = 20;
    this.vy = 5;

    this.keys = [];
    this.jumping = false;
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
    this.x += this.vx;
}

Player.prototype.moveLeft = function(){
    this.x -= this.vx;
}

Player.prototype.jump = function(){
    if (this.keys[this.game.keys.SPACE] && this.jumping) {
        
    }
}

Player.prototype.move = function(){
    if (this.keys[this.game.keys.LEFT_KEY]) {
        this.moveLeft();
    } else if (this.keys[this.game.keys.RIGHT_KEY]) {
        this.moveRight();
    }
}

Player.prototype.setListeners = function() {
    document.onkeydown = (function (e) {
        this.keys[e.keyCode] = true;
    }.bind(this));

    document.onkeyup = (function (e) {
        delete this.keys[e.keyCode];
    }.bind(this));
}
