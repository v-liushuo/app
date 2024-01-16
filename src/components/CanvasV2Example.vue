<template>
  <div>
    <button>Update</button>

    <canvas></canvas>
  </div>
</template>

<script>
/*
 eslint-disable
 */
import {random} from "gsap/gsap-core";
import Ball from "@/js/Ball";

export default {
  mounted() {
    this.startDisplay()
    // this.changeText('123123')
  },
  data: function () {
    return {
      array: [],
      textValue: ''
    }
  },
  methods: {
    startDisplay: function () {
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext('2d');
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);
      let testBall = new Ball(50, 100, 4, 4, 'blue', 10)
      console.log(JSON.stringify(testBall))
      testBall.draw(ctx)
    },
    random: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    randomColor: function () {
      return (
          "rgb(" + random(0, 255) + ", " + random(0, 255) + "," + random(0, 255) + ")"
      );

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