function Platform (game, x, y, w, h ){
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Platform.prototype.draw = function(){
    this.game.ctx.fillStyle = "#FF0000";
    this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
}