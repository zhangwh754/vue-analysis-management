<script setup>
import requestLoading from './request-loading.js'
</script>

<template>
  <div v-if="requestLoading" class="container">
    <div class="mask" @touchmove.prevent></div>
    <div class="loading">
      <n-spin size="large" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .mask {
    position: fixed;
    inset: 0;
    z-index: 99;
    // background-color: rgba(0, 0, 0, 0.1);
  }
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%);
    z-index: 100;
  }
}
</style>
