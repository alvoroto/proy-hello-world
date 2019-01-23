var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 100,
    keys: {
        TOP_KEY: 38,
        SPACE: 32,
        LEFT_KEY: 37,
        RIGHT_KEY: 39,
        D_KEY: 68,
        F_KEY: 70
    },
    platforms: [],
    collectableItems: [],

    init: function (canvasId) {
        
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.fps = 60;

        this.reset();

        this.background = new Background(this);
        this.player = new Player(this)
        //creacion de las plataformas provisionales

        var platform_1 = new Platform(this, 300, 470, 1000, 200);
        var platform_2 = new Platform(this, 0, 500, 500, 40);
        var platform_3 = new Platform(this, 635, 250, 100, 40);
        var platform_4 = new Platform(this, 400, 250, 100, 40);
        var platform_5 = new Platform(this, 300, 370, 150, 50);
        var platform_6 = new Platform(this, 740, 150, 100, 40);
        this.platforms.push(platform_1);
        this.platforms.push(platform_2);
        this.platforms.push(platform_3);
        this.platforms.push(platform_4);
        this.platforms.push(platform_5);
        this.platforms.push(platform_6);
        //
        //creacion de los collectItems provisionales
        var item_1 = new Item(this, 100, 460, 20, 20, true);
        var item_2 = new Item(this, 450, 220, 20, 20, false);
        var item_3 = new Item(this, 800, 120, 20, 20, false);
        this.collectableItems.push(item_1);
        this.collectableItems.push(item_2);
        this.collectableItems.push(item_3);

        this.interval = setInterval(function () {
            this.clear();

            this.framesCounter++;

            // controlamos que frameCounter no sea superior a 1000
            if (this.framesCounter > 1000) {
                this.framesCounter = 0;
            }

            this.player.gravity();
            //Player floor position
            // if (this.player.y > 520){
            //     this.player.vy = 0;
            //     this.player.y = 520;
            //     this.player.jumping = false;
            // }
            this.player.move();
            this.detectItemCollision();
            this.drawAll();

        }.bind(this), 1000 / this.fps);
    },

    //reseteamos todos los elementos del juego para empezar en un estado limpio
    reset: function () {
        this.background = new Background(this);
        this.player = new Player(this)
        this.framesCounter = 0;
    },

    //limpieza de la pantalla
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    drawPlatforms: function () {
        this.platforms.forEach(function (platform) {
            platform.draw();
        })
    },

    drawCollectItems: function () {
        this.collectableItems.forEach(function (collectItem) {
            if (collectItem.isActive) {
                collectItem.draw();
            }
        })
    },

    drawAll: function () {
        this.background.draw();
        this.drawPlatforms();
        this.drawCollectItems();
        this.player.draw();
    },

    detectItemCollision: function () {
        var colItem = this.player.itemColision()
        if (colItem >= 0) {
            if (this.collectableItems[colItem].isActive) {
                this.collectableItems[colItem].isActive = false;
                this.player.collectableItems.push(this.collectableItems[colItem])
                if (this.collectableItems.length > colItem + 1) {
                    this.collectableItems[colItem + 1].isActive = true;
                }
            }
            // this.collectableItems.splice(colItem, 1)
        }
    }
}