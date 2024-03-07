<template>
  <div></div>
</template>

<script setup lang="ts">
import { Context, Engine } from './core'

new Engine({
  context: new Context(),
  project: {
    name: '未命名文件'
  }
})

</script>
