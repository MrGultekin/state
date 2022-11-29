<script setup>
import {useNumbersStore} from "@/stores/numbers";

const {numbers,filterMinNumber} = useNumbersStore()
</script>

<template>
  <div>
    <h1>GreatGrandChild Component {{filterMinNumber(8)}}</h1>
    <div class="line"></div>
  </div>
</template>