function Platform (game, x, y, w, h, isDashBreakable = false, isDownBreakable = false){
    this.id =
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isDashBreakable = isDashBreakable;
    this.isDownBreakable = isDownBreakable;
}

Platform.prototype.draw = function(){
    this.game.ctx.fillStyle = "#FF0000";
    this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
}
