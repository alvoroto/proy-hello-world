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
    currentLevel:0,
    levels:[],

    /*
    Inicio del juego
    */
    init: function (canvasId) {
        
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.fps = 60;

        this.reset();

        this.background = new Background(this);
        this.player = new Player(this)

        this.loadData();
        this.loadLevel();
        


        /*
            Loop de animacion
        */
        this.interval = setInterval(function () {
            this.clear();

            this.framesCounter++;

            // controlamos que frameCounter no sea superior a 1000
            if (this.framesCounter > 1000) {
                this.framesCounter = 0;
            }

            this.player.gravity();
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
        this.platforms.forEach(function(platform) {
            platform.draw();
        })
    },

    drawCollectItems: function () {
        this.collectableItems.forEach(function (collectItem) {
            if (collectItem.isActive) {
                collectItem.draw();
                collectItem.animateItem();
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
                } else{
                    this.changeLevel();
                }
            }
        }
    },

    changeLevel: function(){
        this.currentLevel++;
        if(this.currentLevel <= this.levels){
           // this.loadLevel();
        }
    },

    loadLevel: function(){
        this.platforms = this.levels[this.currentLevel].platforms;
        this.collectableItems = this.levels[this.currentLevel].collectableItems;
        this.background.img.src = this.levels[this.currentLevel].background.img.src;
        //this.player.x = this.levels[this.currentLevel].player.x;
        //this.player.y = this.levels[this.currentLevel].player.y;
    },

    loadData: function(){
        totalGame.forEach(function(level){
            var nivel = new Level(this)

            //platforms
            level.platforms.forEach(function(platform){
                nivel.platforms.push(new Platform(this, platform.img, platform.x, platform.y, platform.w, platform.h));
            }.bind(this))
           
            //collectable items
            level.collectableItems.forEach(function(collectableItem){
                nivel.collectableItems.push(new Item(this, collectableItem.src, collectableItem.x, collectableItem.y, collectableItem.w, collectableItem.h, collectableItem.isActive))
            }.bind(this))

            //background
            nivel.background = new Background(this, level.background.src);


            this.levels.push(nivel);
        }.bind(this))
    }
}