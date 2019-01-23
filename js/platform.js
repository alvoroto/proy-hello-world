function Platform (game, x, y, w, h, isBreakable = false){
    this.id =
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isBreakable = isBreakable;
}

Platform.prototype.draw = function(){
    this.game.ctx.fillStyle = "#FF0000";
    this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
}
