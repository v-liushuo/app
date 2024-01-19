<template>
  <div>
    <canvas></canvas>
    <p>还剩{{ ballLeft }}个球</p>
  </div>
</template>

<script>
/*
 eslint-disable
 */
import Ball from "@/components/DevilHole/js/Ball";
import {random, randomColor} from "@/util/MyRandom";
import DevilCircle from "@/components/DevilHole/js/DevilCircle";

export default {
  name: "DevilHole",
  mounted() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    this.width = (canvas.width = window.innerWidth);
    this.height = (canvas.height = window.innerHeight);
    this.createBalls();
    let devilCircle = new DevilCircle(50, 50, true);
    devilCircle.setControls();
    // setInterval(() => this.loop(ctx), 10)
    this.loop(ctx, devilCircle)

  },
  data: function () {
    return {
      array: [],
      textValue: '',
      width: 0,
      height: 0,
      balls: []
    }
  },
  computed: {
    ballLeft: function () {
      return this.balls.filter(item => item.exists).length;
    }
  },
  methods: {
    createBalls: function () {
      while (this.balls.length < 50) {
        let size = random(10, 20);
        let ball = new Ball(
            random(0 + size, this.width - size),
            random(0 + size, this.height - size),
            random(-7, 7),
            random(-7, 7),
            randomColor(),
            size,
            true
        );
        this.balls.push(ball);
      }
    },
    loop: function (ctx, devilCircle) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
      ctx.fillRect(0, 0, this.width, this.height);

      devilCircle.draw(ctx);
      devilCircle.checkBounds(this.width, this.height);
      for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].draw(ctx);
        this.balls[i].collisionDetect(this.balls);
        this.balls[i].update(this.width, this.height);
        devilCircle.collisionDetect(this.balls[i]);
      }
      requestAnimationFrame(() => this.loop(ctx, devilCircle));
    }
  }
}
</script>


<style scoped>
html {
  width: 100%;
  height: inherit;
  background: #ddd;
}

canvas {
  display: block;
}

body {
  margin: 0;
}

button {
  position: absolute;
  top: 5px;
  left: 5px;
}

button:hover {
  background-color: #41b883;
}

p {
  position: absolute;
  margin: 0;
  top: 35px;
  right: 5px;
  color: #aaa;
}
</style>