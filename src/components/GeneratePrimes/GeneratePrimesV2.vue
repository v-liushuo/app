<script>
import generate from "../../../public/generate";

export default {
  name: "GeneratePrimes",
  data() {
    return {
      quota: 0,
      output: '',
      worker: null
    }
  },
  created() {
    console.log(generate)
    this.worker = new Worker('/generate.js');
    this.worker.addEventListener('message', (message) => this.output = `Finished generating ${message.data} primes!`)
  },
  watch: {},
  methods: {
    startGenerate: function () {
      this.worker.postMessage({
        command: "generate",
        quota: this.quota
      })
    },

    reload: function () {
      this.output = 'Try typing in here immediately after pressing "Generate primes"';
      document.location.reload();
    }
  },
  destroyed() {
    this.worker.removeEventListener('message');
    this.worker.terminate();
  }
}
</script>

<template>
  <div>
    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000" v-model="quota"/>

    <button id="generate" @click="startGenerate">Generate primes</button>
    <button id="reload" @click="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"</textarea
    >

    <div id="output">{{ output }}</div>
  </div>
</template>

<style scoped>
textarea {
  display: block;
  margin: 1rem 0;
}
</style>