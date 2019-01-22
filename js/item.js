function Item(game, x, y, w, h, isActive){
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isActive = isActive;
}

Item.prototype.draw = function(){
    if(this.isActive){
        this.game.ctx.fillStyle = "#00FF00";
        this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}