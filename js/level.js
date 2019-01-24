function Level (game) {
    this.game = game;
    this.platforms = [];
    this.collectableItems = [];
    this.powerItems = [];
    this.background = new Background(game);
}

