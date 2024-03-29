import {randomColor} from '@/util/MyRandom.js'
import Shape from "@/components/DevilHole/js/Shape";

class Ball extends Shape {
    constructor(x, y, velX, velY, color, size, exists) {
        super(x, y, velX, velY, exists);
        this.color = color
        this.size = size;
    }
}

Ball.prototype.draw = function (ctx) {
    if (!this.exists) {
        return;
    }
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function (width, height) {
    if (!this.exists) {
        return;
    }
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
    if (!this.exists) {
        return;
    }
    for (let j = 0; j < balls.length; j++) {
        if (this !== balls[j] && balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();

                balls[j].velX = -balls[j].velX;
                balls[j].velY = -balls[j].velY;
                this.velX = -this.velX;
                this.velY = -this.velY;
            }
        }
    }
}
export default Ball;