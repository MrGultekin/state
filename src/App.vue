<script setup>
import Parent from './components/Parent.vue'
import {ref} from "vue";

// Let's have a piece of state that we can change
const numbers = ref([1,2,3,4,5,6,7,8,9,10])
</script>

<template>
  <main>
    <Parent :numbers="numbers"/>
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
