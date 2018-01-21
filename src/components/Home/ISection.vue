<template lang="html">
<div class="">
  123
  <!-- <div class="container" @click="more(data.basicId)"> -->
  <div class="container" @click="">
      <img :src="BURL+data.basicPic" :alt="data.basicTitle">
      <div class="text-container">
        <div class="panel">
          <div class="panel-img">
            <img :src="BURL+data.basicPic" :alt="data.basicTitle">
          </div>
          <div class="panel-text">
            <p class="title-cn">{{data.articleName}}</p>
            <p class="title-en">{{data.articleEngName}}</p>
            <p class="director">导演：{{data.articleSource}}</p>
            <p class="stars">

              <img class="imdbmark" src="static/img/IMDb@2x.png">
            </p>
            <p class="tips">
              <span>{{data.movieYear}}</span>
              <span>{{data.movieCountry||"国家未知"}}</span>
              <span>{{data.movieType||"类型未知"}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
console.log(window);
export default {
  name:'ISection',
  props:[
    'movieObject'
  ],
  data () {
    return {
      msg: 'this is ISection!'
    }
  }
}
</script>

<style lang="css">
</style>
