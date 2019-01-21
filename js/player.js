function Player(game) {
    this.game = game;
   
    this.x = this.game.canvas.width * 0.08;
  
    // guardar posición original (suelo)
    this.y0 = this.game.canvas.height * 0.8;
    this.y = this.y0;
  
    this.img = new Image();
    this.img.src = 'img/player.png';
    
    // medidas de la imagen a representar en el canvas
    this.w = 50;
    this.h = 75;
  
    this.vy = 1;

}

Player.prototype.draw = function() {
this.img.onload = function() {
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
        );
}.bind(this);
}

Player.prototype.moveRight = function(){
    this.x += 4;
}

Player.prototype.moveLeft = function(){
    this.x -= 4;
}

Player.prototype.setListeners = function() {
    document.onkeydown = function(event) {
        if (event.keyCode === this.game.keys.LEFT_KEY) {
            this.moveLeft();
        } else if (event.keyCode == this.game.keys.RIGHT_KEY) {
            this.moveRight();
        }
    }.bind(this);
}