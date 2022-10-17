<script setup>
const props = defineProps ({
  title :{
    required: false,
    type: String
  }
})
</script>
<template>
    <h1>Test</h1>
    <h1>{{props.title}}</h1>
</template>