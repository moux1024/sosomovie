<template>
<div class="home" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
  <!-- <ISection :movieObject="movieObject"></ISection> -->
  <div class="" v-for="movieObject in movieList" style="height:80%">
    <ISection :movieObject="movieObject">
    </ISection>

  </div>
</div>
</template>

<script>
import axios from 'axios';
import ISection from './Home/ISection';
export default {
  name: "home",
  mounted() {
    //TODO: loading图
  }, //页面加载完成
  components: {
    ISection
  },
  data() {
    return {
      count: 1,
      classObject: "w0",
      movieList: [],
      BURL: BURL,
      end: false
    }
  },
  methods: {
    loadMore: function() {
      if (!this.end) {
        this.busy = true;
        var vm = this;
        axios.get(BURL + ART + "querylist.do" + "?pageSize=7&cateGoryId=107&pageNo=" + vm.count).then(function(res) {
          vm.count++;
          vm.movieList = vm.movieList.concat(res.data.list)
          console.log(vm.movieList);
          vm.busy = false;
          if (res.data.nextPage == 0) {
            vm.end = true
          }
        })
      }

    }
  }
}
</script>

<style>
.home {
  height: 100%;
  overflow-y: auto;
}

/* .vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
} */
</style>
