<script>
export default {
  name: "GeneratePrimes",
  data() {
    return {
      quota: 0,
      output: ''
    }
  },
  methods: {
    generatePrimes: function () {
      function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
          if (n % c === 0) {
            return false;
          }
        }
        return true;
      }

      const primes = [];
      const maximum = 1000000;

      while (primes.length < this.quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
          primes.push(candidate);
        }
      }

      return primes;
    },
    startGenerate: function () {
      this.generatePrimes();
      this.output = `Finished generating ${this.quota} primes!`;
    },
    reload: function () {
      this.output = 'Try typing in here immediately after pressing "Generate primes"';
      document.location.reload();
    }
  }
}
</script>

<template>
  <div>
    <input type="number" id="input" v-model="quota">
    <button @click="startGenerate">生成</button>
    <button @click="reload">重置</button>

    <p id="output">{{ output }}</p>
  </div>
</template>

<style scoped>

</style>