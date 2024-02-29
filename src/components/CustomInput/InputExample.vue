<script>
import CustomInput from "@/components/CustomInput/CustomInput.vue";

export default {
  name: "InputExample",
  components: {CustomInput},
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<template>
  <div>
    <CustomInput :model-value="searchText" @update:modelValue="args => searchText = args"/>
    <p>P: {{ searchText }}</p>
  </div>
</template>

<style scoped>

</style>