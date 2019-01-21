function Background(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = 'img/black.png';
    
    this.x = 0;
    this.y = 0;
  
    this.dx = 10;

    Background.prototype.draw = function() {
        console.log(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height)
        this.img.onload = function() {
            this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
        }.bind(this);
        
        //this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
    };
      
  }