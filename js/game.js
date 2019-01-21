var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 100,
    keys: {
        TOP_KEY : 38,
        SPACE : 32,
        LEFT_KEY : 37,
        RIGHT_KEY : 39
    },

    init: function(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.fps = 60;
        this.background = new Background(this);
        this.player = new Player(this)
        this.interval = setInterval(function () {
            this.clear();
            this.background.draw();
            this.player.draw();
            this.player.move();
        }.bind(this), 1000 / this.fps);
    },

     //limpieza de la pantalla
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}