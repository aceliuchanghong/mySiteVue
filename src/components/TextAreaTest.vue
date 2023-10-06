<template>
  <el-input
      v-model="textarea"
      :rows="2"
      type="textarea"
      placeholder="Please input Text"
  />
</template>

<script setup>
import { ref } from 'vue'
const textarea = ref('')
</script>
