<script setup>
import Child from './Child.vue'
import {defineProps} from "vue";

// Define the props that we want to pass to the Child component from the Parent component
const {numbers} = defineProps(['numbers'])
</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <div class="line"></div>
    <Child :numbers="numbers"/>
  </div>
</template>


