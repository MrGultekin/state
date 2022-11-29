<script setup>
import GrandChild from './GrandChild.vue'
import useNumberStore from "@/composables/useNumbers";

const {numbers,addNumber} = useNumberStore()
</script>

<template>
  <div>
    <h1>Child Component {{numbers}}</h1>
    <button @click="addNumber(99)">Add 5</button>
    <div class="line"></div>
    <GrandChild />

  </div>
</template>