<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
/*
 eslint-disable
 */
import Ball from "@/js/Ball";
import {random, randomColor} from "@/js/MyRandom";

export default {
  mounted() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    this.width = (canvas.width = window.innerWidth);
    this.height = (canvas.height = window.innerHeight);
    this.createBalls();
    this.loop(ctx)

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
            size
        );
        console.log(ball.x, ball.y)
        this.balls.push(ball);
      }
    },
    loop: function (ctx) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].draw(ctx);
        this.balls[i].collisionDetect(this.balls);
        this.balls[i].update(this.width, this.height);
      }
      requestAnimationFrame(() => this.loop(ctx));
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
</style>