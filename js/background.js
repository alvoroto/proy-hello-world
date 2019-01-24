function Background(ctx, w, h, src="img/black.png") {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = src;
    
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
  
    this.dx = 10;

    Background.prototype.draw = function() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
      
  }