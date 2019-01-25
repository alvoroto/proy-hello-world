function Images(ctx, x, y, w, h, src) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = src;
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    Images.prototype.draw = function() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
      
  }