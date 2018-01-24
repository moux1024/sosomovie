<template lang="html">
  <div class="container" @click="more(movieObject.basicId)">
  <!-- <div class="container" @click=""> -->
      <img :src="BURL+movieObject.basicPic" :alt="movieObject.basicTitle">
      <div class="text-container">
        <Info :info="movieObject"></Info>
      </div>
  </div>
</template>

<script>
import Info from '@/components/Public/Info';
export default {
  name: 'ISection',
  components:{
    Info
  },
  props: [
    'movieObject'
  ],
  data() {
    return {
      msg: 'this is ISection!',
      BURL: BURL
    }
  },
  methods: {
    more(id) {
      this.$router.push("/detail/" + id)
    }
  }
}
</script>

<style lang="less">
.container {
    height: 100%;
    position: relative;
    img {
        z-index: -1;
        float: left;
        width: 100%;
        height: 100%;
    }
    .text-container {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 10rem;
        text-align: center;
        
    }

}
</style>
