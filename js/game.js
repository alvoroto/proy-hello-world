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
    platforms: [],

    init: function(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.fps = 60;
        this.background = new Background(this);
        this.player = new Player(this)
        var platform_1 = new Platform(this, 300, 470, 400, 200);
        var platform_2 = new Platform(this, 0, 500, 300, 40);
        var platform_3 = new Platform(this, 0, 500, 300, 40);
        var platform_4 = new Platform(this, 400, 200, 100, 40);
        var platform_5 = new Platform(this, 300, 370, 150, 50);
        this.platforms.push(platform_1);
        this.platforms.push(platform_2);
        this.platforms.push(platform_3);
        this.platforms.push(platform_4);
        this.platforms.push(platform_5);
        this.interval = setInterval(function () {
            this.clear();
            this.background.draw();
            this.drawPlatforms();
            this.player.gravity();
            
            if (this.player.y > 520){
                this.player.vy = 0;
                this.player.y = 520;
                this.player.jumping = false;
            }
           
            this.player.move();
            this.player.draw();
            
            
           
        }.bind(this), 1000 / this.fps);
    },

     //limpieza de la pantalla
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    drawPlatforms: function (){
        this.platforms.forEach(function(platform){
            platform.draw();
        })
    }
}