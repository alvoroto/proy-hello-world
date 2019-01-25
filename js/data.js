var totalGame = [
    {
        level: 1,
        platforms: [
            {
                img: "img/black.png",
                x: 0,
                y: 0,
                w: 2,
                h: 600
            },
            {
                img: "img/black.png",
                x: 0,
                y: 600,
                w: 1200,
                h: 2
            },
            {
                img: "img/black.png",
                x: 1200,
                y: 0,
                w: 2,
                h: 600
            }
        ],
        collectableItems: [
            {
                x: 1080,
                y: 540,
                w: 50,
                h: 50,
                isActive: true,
                src: "img/item.png"
            },
        ],
        background: {
            src:"img/fondo1.png"
        },
        frontImages: [
            {
                x: 920,
                y: 395,
                w: 175,
                h: 220,
                src: "img/ruin_lamp_01.png",
            },
            {
                x: 215,
                y: 382,
                w: 180,
                h: 230,
                src: "img/ruin_lamp_01.png",
            }
        ],
        player : {
            x: 600,
            y: 400
        }
    },

    {
        level: 22,
        platforms: [
            {
                img: "img/blue.png",
                x: 0,
                y: 440,
                w: 1200,
                h: 60
            },
            {
                img: "img/blue.png",
                x: 50,
                y: 0,
                w: 60,
                h: 600
            },
            {
                img: "img/green.png",
                x: 800,
                y: 350,
                w: 200,
                h: 200,
                isDashBreakable: true,
                isDownBreakable: true
            }
        
        ],
        backImages: [
            {
                x: 300,
                y: 0,
                w: 5,
                h: 600,
                src: "img/blue.png",
            }
        ],
        frontImages: [
            {
                x: 400,
                y: 0,
                w: 5,
                h: 600,
                src: "img/blue.png",
            }
        ],
        collectableItems: [
            {
                x: 400,
                y: 360,
                w: 60,
                h: 15,
                isActive: true,
                src: "img/green.png",
                damage: false
            },
            {
                x: 200,
                y: 360,
                w: 60,
                h: 15,
                isActive: false,
                src: "img/green.png",
                damage: false
            }
        ],
        powerItems: [
            {
                x: 111,
                y: 460,
                w: 15,
                h: 15,
                isActive: true,
                src: "img/blue.png",
                type:"dash"
            }
        ],
        damageItems: [
            {
                x: 600,
                y: 400,
                w: 60,
                h: 15,
                isActive: true,
                src: "img/red.png",
                damage: true
            }
        ],
        background: {
            src:"img/grey.png"
        },
        player : {
            x: 800,
            y: 200
        }
    }
]