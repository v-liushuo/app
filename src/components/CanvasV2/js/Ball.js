import {randomColor} from '../../../util/MyRandom.js'

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color
        this.size = size;
    }
}

Ball.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function (width, height) {
    if (this.x + this.size >= width) {
        this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
        this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
        this.velY = -this.velY
    }

    this.x += this.velX;
    this.y += this.velY
}


Ball.prototype.collisionDetect = function (balls) {
    for (let j = 0; j < balls.length; j++) {
        if (this !== balls[j]) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
            }
        }
    }
}
export default Ball;