<script setup>
import GrandChild from './GrandChild.vue'
import {defineProps} from "vue";

const {numbers} = defineProps(['numbers'])
</script>

<template>
  <div>
<!--     Let's render the numbers that we passed from the Parent component-->
    <h1>Child Component {{numbers}}</h1>
    <div class="line"></div>
    <GrandChild/>

  </div>
</template>