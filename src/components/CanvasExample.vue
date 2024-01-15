<template>
  <div>
    <button>Update</button>

    <canvas></canvas>
    <input type="text" v-on:change="changeText">
    <select @change="changeText">
      <option value="123">123</option>
      <option value="345">345</option>
    </select>
    <p>{{ textValue }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.autoDisplay()
    // this.changeText('123123')
  },
  data: function () {
    return {
      array: [],
      textValue: ''
    }
  },
  methods: {
    changeText: function (event) {
      // eslint-disable-next-line no-debugger
      debugger
      console.log(event)
      // let p = document.querySelector('input+p')
      this.textValue = event.target.value

    },
    autoDisplay: function () {

      var btn = document.querySelector("button");
      var canvas = document.querySelector("canvas");
      var ctx = canvas.getContext("2d");

      var WIDTH = document.documentElement.clientWidth;
      var HEIGHT = document.documentElement.clientHeight;

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function draw() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (var i = 0; i < 200; i++) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${random('255')},${random('255')},${random('255')},0.5)`;
          ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      setInterval(draw, 300)
      btn.onclick = draw;
      btn.addEventListener('click', draw)
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