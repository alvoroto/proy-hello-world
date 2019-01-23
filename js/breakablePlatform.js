function BreakablePlatform (game, x, y, w, h ){
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

BreakablePlatform.prototype.draw = function(){
    this.game.ctx.fillStyle = "#330000";
    this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
}

BreakablePlatform.prototype.break = function(){
    
}
