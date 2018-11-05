<template>
  <div class="home">
    <img :src="logo"/>
    <HelloWorld msg="Welcome to Your Vue.js App, 한글폰트"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import resource from '@/resource.json'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: resource.img.logo
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 200px;
  }
</style>
