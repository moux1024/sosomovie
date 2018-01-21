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
      count: 0,
      classObject: "w0",
      testData: [{
          img: "static/img/01.jpg",
          textEn: "Apple",
          textCn: "芬恩芬恩"
        },
        {
          img: "static/img/02.jpg",
          textEn: "Car",
          textCn: "芬恩芬恩"
        },
        {
          img: "static/img/03.jpg",
          textEn: "pangxie",
          textCn: "芬恩芬恩"
        },
        {
          img: "static/img/04.jpg",
          textEn: "vans",
          textCn: "芬恩芬恩"
        },
        {
          img: "static/img/05.jpg",
          textEn: "alipay",
          textCn: "芬恩芬恩"
        }
      ],
      movieList: [],
      BURL: BURL
    }
  },
  methods: {

    // load() {
    //   var vm = this;
    //   console.log(window);
    //   axios.get(BURL + ART + "querylist.do").then(function(res) {
    //     vm.movieList = res.data.list
    //     console.log(vm.movieList);
    //   })
    // },
    loadMore: function() {
      this.busy = true;
      var vm = this;
      axios.get(BURL + ART + "querylist.do").then(function(res) {
        vm.movieList = vm.movieList.concat(res.data.list)
        console.log(vm.movieList);
        vm.busy = false;
      })
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
