var totalGame = [
    {
        level: 1,
        platforms: [
            {
                img: "img/grey.png",
                x: 0,
                y: 540,
                w: 1200,
                h: 60
            },
            {
                img: "img/grey.png",
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
                src: 'img/green.png'
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
                img: "img/grey.png",
                x: 0,
                y: 440,
                w: 1200,
                h: 60
            },
            {
                img: "img/grey.png",
                x: 50,
                y: 0,
                w: 60,
                h: 600
            }
        
        ],
        collectableItems: [
            {
                x: 400,
                y: 460,
                w: 60,
                h: 15,
                isActive: true,
                src: 'img/gree.png',
                damage: false
            }
        ],
        damageItems: [
            {
                x: 400,
                y: 460,
                w: 60,
                h: 15,
                isActive: true,
                src: 'img/red.png',
                damage: true
            }
        ],
        background: {
            src:"img/black.png"
        },
        player : {
            x: 600,
            y: 400
        }
    }
]