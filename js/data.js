var totalGame = [
    {
        level: 0,
        platforms: [
            {
                img: "img/black.png",
                x: 0,
                y: 0,
                w: 2,
                h: 600
            },
            {
                img: "img/transparent.png",
                x: 0,
                y: 480,
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
                x: 590,
                y: 360,
                w: 50,
                h: 50,
                isActive: true,
                src: "img/item.png"
            },
        ],
        background: {
            src:"img/fondo0_1.png"
        },
        frontImages: [
            {
                x: 100,
                y: 300,
                w: 150,
                h: 300,
                src: "img/stone8.png",
            },
            {
                x: 800,
                y: 360,
                w: 175,
                h: 240,
                src: "img/stone7.png",
            },
            {
                x: 215,
                y: 400,
                w: 180,
                h: 200,
                src: "img/stone6.png",
            }
        ],
        player : {
            x: 50,
            y: 350
        }
    },

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
                img: "img/transparent.png",
                x: 0,
                y: 480,
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
            ,
            {
                img: "img/break5.png",
                x: 990,
                y: 340,
                w: 70,
                h: 130,
                isDashBreakable:true

            },
            {
                img: "img/plat1.png",
                x: 980,
                y: 300,
                w: 300,
                h: 60

            }
        ],
        collectableItems: [
            {
                x: 1090,
                y: 360,
                w: 50,
                h: 50,
                isActive: true,
                src: "img/item.png"
            },
        ],
        powerItems: [
            {
                x: 590,
                y: 390,
                w: 40,
                h: 40,
                isActive: true,
                src: "img/power1.png",
                type:"dash"
            }
        ],
        background: {
            src:"img/fondo0_7.png"
        },
        frontImages: [
            {
                x: 100,
                y: 300,
                w: 150,
                h: 300,
                src: "img/stone8.png",
            },
            {
                x: 215,
                y: 400,
                w: 180,
                h: 200,
                src: "img/stone6.png",
            }
        ],
        player : {
            x: 50,
            y: 350
        }
    },

    {
        level: 2,
        platforms: [
            {
                img: "img/black.png",
                x: 0,
                y: 0,
                w: 2,
                h: 600
            },
            {
                img: "img/transparent.png",
                x: 0,
                y: 480,
                w: 1200,
                h: 2
            },
            {
                img: "img/break7.png",
                x: 1010,
                y: 300,
                w: 190,
                h: 40,
                isDownBreakable:true

            },
            {
                img: "img/black.png",
                x: 1200,
                y: 0,
                w: 2,
                h: 600
            },
            {
                img: "img/columna1.png",
                x: 860,
                y: 390,
                w: 70,
                h: 80

            },
            {
                img: "img/columna2.png",
                x: 940,
                y: 300,
                w: 70,
                h: 170

            }
        ],
        collectableItems: [
            {
                x: 1060,
                y: 360,
                w: 50,
                h: 50,
                isActive: true,
                src: "img/item.png"
            },
        ],
        powerItems: [
            {
                x: 590,
                y: 390,
                w: 40,
                h: 40,
                isActive: true,
                src: "img/power2.png",
                type:"down"
            }
        ],
        background: {
            src:"img/fondo0_6.png"
        },
        frontImages: [
            {
                x: 100,
                y: 300,
                w: 150,
                h: 300,
                src: "img/stone8.png",
            },
            {
                x: 215,
                y: 400,
                w: 180,
                h: 200,
                src: "img/stone6.png",
            }
        ],
        player : {
            x: 50,
            y: 350
        }
    },

    {
        level: 4,
        platforms: [
            {
                img: "img/black.png",
                x: 0,
                y: 0,
                w: 2,
                h: 600
            },
            {
                img: "img/transparent.png",
                x: 0,
                y: 480,
                w: 1200,
                h: 2
            },
            {
                img: "img/black.png",
                x: 1200,
                y: 0,
                w: 2,
                h: 600
            },
            {
                img: "img/columna2.png",
                x: 940,
                y: 300,
                w: 70,
                h: 170

            }
        ],
        collectableItems: [
            {
                x: 1060,
                y: 360,
                w: 50,
                h: 50,
                isActive: true,
                src: "img/item.png"
            },
        ],
        powerItems: [
            {
                x: 590,
                y: 390,
                w: 40,
                h: 40,
                isActive: true,
                src: "img/power3.png",
                type:"jump"
            }
        ],
        background: {
            src:"img/fondo0_8.png"
        },
        frontImages: [
            {
                x: 100,
                y: 300,
                w: 150,
                h: 300,
                src: "img/stone8.png",
            },
            {
                x: 215,
                y: 400,
                w: 180,
                h: 200,
                src: "img/stone6.png",
            }
        ],
        player : {
            x: 50,
            y: 350
        }
    },

    {
        level: 4,
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
            x: 100,
            y: 500
        }
    },

    {
        level: 5,
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
            },
            {
                img: "img/columna1.png",
                x: 480,
                y: 480,
                w: 100,
                h: 120
            },
            {
                img: "img/columna2.png",
                x: 600,
                y: 360,
                w: 100,
                h: 240
            },
            {
                img: "img/plat2.png",
                x: 410,
                y: 260,
                w: 120,
                h: 50
            }

        ],
        damageItems: [
            {
                x: 700,
                y: 450,
                w: 200,
                h: 120,
                isActive: true,
                src: "img/spike2.png"
            }
        ],
        powerItems: [
            {
                x: 430,
                y: 220,
                w: 40,
                h: 40,
                isActive: true,
                src: "img/power1.png",
                type:"dash"
            }
        ],
        collectableItems: [
            {
                x: 490,
                y: 420,
                w: 50,
                h: 50,
                isActive: true,
                src: "img/item.png"
            },
            {
                x: 640,
                y: 200,
                w: 50,
                h: 50,
                isActive: false,
                src: "img/item.png"
            },
            {
                x: 1020,
                y: 540,
                w: 50,
                h: 50,
                isActive: false,
                src: "img/item.png"
            },
        ],
        background: {
            src:"img/fondo2.png"
        },
        frontImages: [
            {
                x: 180,
                y: 180,
                w: 220,
                h: 620,
                src: "img/abyss1.png",
            },
            {
                x: 650,
                y: 480,
                w: 320,
                h: 180,
                src: "img/ston313.png",
            }
        ],
        player : {
            x: 100,
            y: 500
        }
    },
    {
        level: 10,
        platforms: [
            {
                img: "img/black.png",
                x: 0,
                y: 0,
                w: 2,
                h: 600
            },
            {
                img: "img/transparent.png",
                x: 0,
                y: 480,
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
                x: 590,
                y: 360,
                w: 50,
                h: 50,
                isActive: true,
                src: "img/item.png"
            },
        ],
        background: {
            src:"img/fondo0_end.png"
        },
        frontImages: [
            {
                x: 100,
                y: 300,
                w: 150,
                h: 300,
                src: "img/stone8.png",
            },
            {
                x: 800,
                y: 360,
                w: 175,
                h: 240,
                src: "img/stone7.png",
            },
            {
                x: 215,
                y: 400,
                w: 180,
                h: 200,
                src: "img/stone6.png",
            }
        ],
        player : {
            x: 50,
            y: 350
        }
    }

]