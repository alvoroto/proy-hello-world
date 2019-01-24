var totalGame = [
    {
        level: 1,
        platforms: [
            {
                img: "img/blue.png",
                x: 0,
                y: 540,
                w: 1200,
                h: 60
            },
            {
                img: "img/blue.png",
                x: 0,
                y: 0,
                w: 60,
                h: 600
            }
        
        ],
        collectableItems: [
            {
                x: 200,
                y: 460,
                w: 60,
                h: 15,
                isActive: true,
                src: "img/green.png"
            }
        ],
        background: {
            src:"img/black.png"
        },
        player : {
            x: 600,
            y: 400
        }
    },

    {
        level: 2,
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
                img: "img/blue.png",
                x: 800,
                y: 350,
                w: 200,
                h: 200,
                isDashBreakable: true,
                isDownBreakable: true
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
            src:"img/black.png"
        },
        player : {
            x: 800,
            y: 200
        }
    }
]