<script setup>
import BeholdWidget from "../dist/index.js"
</script>

<template>
  <BeholdWidget
    v-on:load="() => console.log('Loaded!')"
    feedId="L7mnQCHvZeMZLbNXmJll"
  />
</template>
