<template>
  <div id="dynamic-state" style="width: 50%; display: inline-block">
    <svg width="200" height="200">
      <polygon :points="points"></polygon>
      <circle r="90" cx="100" cy="100"></circle>
    </svg>
    <label>Sides: {{ sides }}</label>
    <input type="range" min="3" max="500" v-model.number="sides">
    <label>Minimum Radius: {{ minRadius }}</label>
    <input type="range" min="0" max="90" v-model.number="minRadius">
    <label>Update Interval: {{ updateInterval }} milliseconds</label>
    <input type="range" min="10" max="2000" v-model.number="updateInterval">
  </div>
</template>

<script>
import {TweenLite} from "gsap/gsap-core";

export default {
  data: function () {
    let defaultSides = 10;
    let stats = Array.apply(null, {length: defaultSides}).map(
        function () {
          return 10;
        }
    );
    return {
      stats: stats,
      points: generatePoints(stats),
      sides: defaultSides,
      minRadius: 50,
      interval: null,
      updateInterval: 500
    }
  },
  watch: {
    sides: function (newSides, oldSides) {
      let sidesDifference = newSides - oldSides;
      if (sidesDifference > 0) {
        for (let i = 1; i <= sidesDifference; i++) {
          this.stats.push(this.newRandomValue());
        }
      } else {
        let absoluteSidesDifference = Math.abs(sidesDifference);
        for (let i = 1; i <= absoluteSidesDifference; i++) {
          this.stats.shift();
        }
      }
    },
    stats: function (newStats) {
      TweenLite.to(this.$data, this.updateInterval / 1000, {
        points: generatePoints(newStats)
      });
    },
    updateInterval: function () {
      this.resetInterval();
    }
  },
  mounted() {
    this.resetInterval();
  },
  methods: {
    randomizeStats: function () {
      let vm = this;
      this.stats = this.stats.map(function () {
        return vm.newRandomValue();
      })
    },
    newRandomValue: function () {
      return Math.ceil(
          this.minRadius + Math.random() * (100 - this.minRadius)
      );
    },
    resetInterval: function () {
      let vm = this;
      clearInterval(this.interval);
      this.randomizeStats();
      this.interval = setInterval(function () {
        vm.randomizeStats();
      }, this.updateInterval);
    }
  }
}

function valueToPoint(value, index, total) {

  var x = 0;
  var y = -value * 0.9;
  var angle = ((Math.PI * 2) / total) * index;
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var tx = x * cos - y * sin + 100;
  var ty = x * sin + y * cos + 100;
  return {x: tx, y: ty};
}


function generatePoints(stats) {
  let total = stats.length;
  console.log(stats)
  return stats.map(function (stat, index) {
    let point = valueToPoint(stat, index, total);
    return point.x + "," + point.y;
  }).join(" ");

}
</script>


<style scoped>
svg {
  display: block;
}

polygon {
  fill: #41b883;
}

circle {
  fill: transparent;
  stroke: #35495e;
}

input[type="range"] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>