<template>
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <input type="button">

  </div>
</template>

<script>
export default {
  name: "FormEventExample",
  data: function () {
    return {
      message: ''
    }
  }
}
</script>


<style scoped>

</style>