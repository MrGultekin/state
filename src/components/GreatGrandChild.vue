<script setup>
import useNumbers from "@/composables/useNumbers";

const {numbers,filterMinNumber} = useNumbers()
</script>

<template>
  <div>
    <h1>GreatGrandChild Component {{filterMinNumber(8)}}</h1>
    <div class="line"></div>
  </div>
</template>