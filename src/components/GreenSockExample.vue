<template>
  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="40">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: "GreenSockExample",
  data: function () {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number: function (newValue) {
      gsap.to(this.$data, {duration: 0.5, tweenedNumber: newValue})
    }
  }
}
</script>


<style scoped>

</style>