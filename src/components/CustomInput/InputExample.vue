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
    <CustomInput v-model="searchText"></CustomInput>
    <p>{{ searchText }}</p>
  </div>
</template>

<style scoped>

</style>