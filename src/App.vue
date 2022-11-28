<script setup>
import Parent from './components/Parent.vue'
import {ref,provide} from "vue";

// Let's have a piece of state that we can change
const numbers = ref([4,6,8,3,7])

// Let's provide the numbers to the Child and GreatGrandChild component
provide('numbers', numbers)


// Let's create a function that will add numbers to the array
const addNumber = (num) => {
  numbers.value.push(num)
}
</script>

<template>
  <main>
    <Parent />
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
