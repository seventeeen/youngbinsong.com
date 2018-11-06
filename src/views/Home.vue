<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App, 한글폰트"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 200px;
  }
</style>
