<script setup>
import {inject} from "vue";

const numbers = inject('numbers')

const addNumber0 = (num) => {
  numbers.value.push(num)
}
</script>
<template>
  <div>
    <h1>GreatGrandChild Component {{numbers}}</h1>
    <button @click="addNumber0(0)">Add 0</button>
    <div class="line"></div>
  </div>
</template>