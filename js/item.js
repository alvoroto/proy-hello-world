function Item(game, x, y, w, h, isActive){
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isActive = isActive;
    this.img = new Image();
    this.img.src = 'img/hello_anim.png';
    // número de imágenes diferentes
    this.img.frames = 5;
    this.img.framesTo = 4;
    this.img.framesFrom = 0;
    this.img.frameIndex = 1;
    this.img.framesX = 0;
    this.img.framesY = 0;
    this.img.framesW = 0;
    this.img.framesH = 0;
}

Item.prototype.draw = function(){
    if(this.isActive){
        this.game.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames)+this.img.framesX,
            this.img.framesY,
            Math.floor(this.img.width / this.img.frames)+this.img.framesW,
            this.img.height+this.img.framesH,
            this.x,
            this.y,
            this.w,
            this.h
        );
    }
}

Item.prototype.animateItem = function() {
      
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if(this.img.frameIndex<this.img.framesFrom){
        this.img.frameIndex=this.img.framesFrom
    }
    if (this.game.framesCounter % 10 === 0) {
      this.img.frameIndex += 1;
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > this.img.framesTo) this.img.frameIndex = this.img.framesFrom;
    }
  };