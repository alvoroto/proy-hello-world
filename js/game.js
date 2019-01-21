var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
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
        this.background.draw();

        this.player = new Player(this)
        this.player.draw();
    }
}