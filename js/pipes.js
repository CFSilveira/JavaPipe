class Pipes {
    constructor(game, type, x, y, width, height, gps, hp, facing, isSelected, stamina) {
        this.game = game;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gps = gps;
        this.hp = hp;
        this.facing = facing;
        this.isSelected = isSelected;
        this.stamina = stamina;
        this.img = new Image();
        this.square = new Image();
        this.staminaFrame = new Image();
        this.canvas;
    }

    draw() {
        if (this.type === 1) {
            if (this.facing === 1) {
                this.img.src = './images/1pipe1.png';
            } else if (this.facing === 2) {
                {this.img.src = './images/1pipe2.png';}
            } else if (this.facing === 3) {
                {this.img.src = './images/1pipe3.png';}
            } else if (this.facing === 4) {
                {this.img.src = './images/1pipe4.png';}
            }
        }
                    
        else if (this.type === 2) {
            if (this.facing === 1) {
                this.img.src = './images/2pipe1.png';
            } else if (this.facing === 2) {
                {this.img.src = './images/2pipe1.png';}
            } else if (this.facing === 3) {
                {this.img.src = './images/2pipe1.png';}
            } else if (this.facing === 4) {
                {this.img.src = './images/2pipe1.png';}
            }
        }

        else if (this.type === 3) {
            if (this.facing === 1) {
                this.img.src = './images/3pipe1.png';
            } else if (this.facing === 2) {
                {this.img.src = './images/3pipe2.png';}
            } else if (this.facing === 3) {
                {this.img.src = './images/3pipe3.png';}
            } else if (this.facing === 4) {
                {this.img.src = './images/3pipe4.png';}
            }
        }

        else if (this.type === 4) {
            if (this.facing === 1) {
                this.img.src = './images/bhorseright.png';
            } else if (this.facing === 2) {
                {this.img.src = './images/bhorseleft.png';}
            } else if (this.facing === 3) {
                {this.img.src = './images/bhorseleft.png';}
            } else if (this.facing === 4) {
                {this.img.src = './images/bhorseleft.png';}
            }
        }

        if (this.hp === 10) {
            this.game.ctx.drawImage(this.img, this.x, this.y, 100, 100);
        }
        else if (this.hp > 9) {
            this.game.ctx.drawImage(this.img, this.x, this.y, 100, 100);
        }

    }

    drawSquare() {
        this.square.src = './images/ysquare.png';
        this.game.ctx.drawImage(this.square, this.x, this.y, 100, 100);
    }

    drawStamina() {
        //draws a hint that a unit is ready to be moved
        if (this.stamina >= 5) {
            this.staminaFrame.src = './images/staminag.png';            
        }
        else if (this.stamina > 2) {
            this.staminaFrame.src = './images/staminay.png';
        }
        else if (this.stamina < 2) {
            this.staminaFrame.src = './images/staminar.png';
        }

        this.game.ctx.drawImage(this.staminaFrame, this.x, this.y, 100, 100);
    }

}

class NeutralPipe extends Pipes {
    constructor(game, faction, type, x, y, width, height, gps, hp, facing, isSelected, stamina) {
        super(game, type, x, y, width, height, gps, hp, facing, isSelected, stamina);
        this.faction = 'neutral';
    }
}

class ExitPipe extends Pipes {
    constructor(game, faction, type, x, y, width, height, gps, hp, facing, isSelected, stamina) {
        super(game, type, x, y, width, height, gps, hp, facing, isSelected, stamina);
        this.faction = 'red';
    }
}

class YellowSoldier extends Soldiers {
    constructor(game, faction, type, x, y, width, height, gps, hp, facing, isSelected, stamina) {
        super(game, type, x, y, width, height, gps, hp, facing, isSelected, stamina);
        this.faction = 'yellow';
    }
}