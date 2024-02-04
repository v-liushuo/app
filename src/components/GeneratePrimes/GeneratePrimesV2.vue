<script>
import generate from "../../../public/generate";

export default {
  name: "GeneratePrimes",
  data() {
    return {
      quota: 0,
      output: '',
      worker: null,
      show2: true
    }
  },
  created() {
    console.log(generate)
    this.worker = new Worker('/generate.js');
    this.worker.addEventListener('message', (message) => this.output = `Finished generating ${message.data} primes!`)
  },
  watch: {
    quota(newValue, oldValue) {
      console.log('oldValue:', oldValue, 'newValue:', newValue);
    }
  },
  computed: {
    quotaCom() {
      return this.quota + '1qwe';
    }

  },
  methods: {
    startGenerate: function () {
      this.worker.postMessage({
        command: "generate",
        quota: this.quota
      })
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)

      });
      console.log(window.location)
    },

    reload: function () {
      this.output = 'Try typing in here immediately after pressing "Generate primes"';
      document.location.reload();
    },
    mouseMove: function (event) {
      console.log(event)
    }
  },
  destroyed() {
    this.worker.removeEventListener('message');
    this.worker.terminate();
  }
}
</script>

<template>
  <div @mousedown.right="mouseMove">
    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000" v-model="quota"/>

    <button id="generate" @click="startGenerate">Generate primes</button>
    <button id="reload" @click="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"</textarea
    >

    <div id="output">{{ output }}</div>
    <button @click="quota++"></button>
    <p>{{ quotaCom }}</p>
    <el-button @click="show2 = !show2">button</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
textarea {
  display: block;
  margin: 1rem 0;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>