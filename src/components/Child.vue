<script setup>
import GrandChild from './GrandChild.vue'
import {inject} from "vue";

const numbers = inject('numbers')

const addNumber = (num) => {
  numbers.value.push(num)
}
</script>

<template>
  <div>
<!--     Let's render the numbers that we passed from the Parent component-->
    <h1>Child Component {{numbers}}</h1>
    <button @click="addNumber(5)">Add 5</button>
    <div class="line"></div>
    <GrandChild />

  </div>
</template>