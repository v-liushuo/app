<script>
export default {
  name: "CustomInput",
  props: ['modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
}
</script>

<template>
  <input v-model="value"/>
</template>

<style scoped>

</style>