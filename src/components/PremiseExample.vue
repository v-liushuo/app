<script>

export default {
  data() {
    return {
      name: '',
      delay: 0,
      output: ''
    }
  },
  methods: {
    alarm: function (person, delay) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        if (delay < 0) {
          throw new Error("Alarm delay must not be negative");
        }
        window.setTimeout(() => {
          resolve(`Wake up, ${person}!`);
        }, delay);
      });
    },

    setResult: function () {
      this.alarm(this.name, this.delay)
          .then((message) => (this.output = message))
          .catch((error) => (this.output = `Couldn't set alarm: ${error}`));
    }

  }
}


</script>
<template>
  <div>
    <p>Name: <input id="name" v-model="name"></p>
    <p>Delay: <input type="number" id="delay" v-model="delay"></p>
    <button id="set-alarm" @click="setResult">Set alarm</button>
    <p id="output">{{ output }}</p>
  </div>
</template>

<style scoped>

</style>