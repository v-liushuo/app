import {randomColor} from '@/util/MyRandom.js'
import Shape from "@/components/DevilHole/js/Shape";

class DevilCircle extends Shape {
    constructor(x, y, exists) {
        super(x, y, 20, 20, exists);
        this.color = 'white';
        this.size = 10;
    }
}

DevilCircle.prototype.draw = function (ctx) {
    if (!this.exists) {
        return;
    }
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

DevilCircle.prototype.update = function (width, height) {
    if (!this.exists) {
        return;
    }
    if (this.x + this.size >= width) {
        this.x -= (5 + this.size)
    }

    if (this.x - this.size <= 0) {
        this.x += (5 + this.size)
    }

    if (this.y + this.size >= height) {
        this.y -= (5 + this.size)
    }

    if (this.y - this.size <= 0) {
        this.y += (5 + this.size)
    }
}
DevilCircle.prototype.setControls = function () {
    window.onkeydown = (e) => {
        switch (e.key) {
            case "a":
                this.x -= this.velX;
                break;
            case "d":
                this.x += this.velX;
                break;
            case "w":
                this.y -= this.velY;
                break;
            case "s":
                this.y += this.velY;
                break;
        }
    }
}


DevilCircle.prototype.collisionDetect = function (balls) {
    for (let j = 0; j < balls.length; j++) {
        if (!balls[j].exists) {
            continue;
        }
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
            balls.slice(j);
            balls[j].exists = false;
        }
    }
}
export default DevilCircle;