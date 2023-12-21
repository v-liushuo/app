<script>
export default {
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<template>
  <div>
    <input v-focus>
  </div>
</template>

<style scoped>

</style>