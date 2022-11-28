<script setup>
import Parent from './components/Parent.vue'
import {ref} from "vue";


const numbers = ref([1,2,3,4,5,6,7,8,9,10])
</script>

<template>
  <main>
    <Parent/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
