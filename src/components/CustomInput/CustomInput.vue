<script>
export default {
  name: "CustomInput",
  props: ['modelValue']
}
</script>

<template>
  <input :value="modelValue"
         @input="$emit('update:modelValue',$event.target.value)">
</template>

<style scoped>

</style>