<template>
  <div>
    <div class="home">
      <!-- <ISection :movieObject="movieObject"></ISection> -->
      <div class="">

      </div>
      <ISection v-for="movieObject in testData">
      </ISection>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ISection from './Home/ISection';
console.log(window);
export default {
  name:"home",
  mounted() {
    //TODO: loading图
  }, //页面加载完成
  components: {
    ISection
  },
  data () {
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
      movieList: [
        {
          name:"test",
          url:"www.baidu.com"
        }
      ],
      BURL:BURL
    }
  },
  methods: {
    more(id) {
      this.$router.push("/detail/" + id)
    },
    load() {
      var vm = this;
      console.log(window);
      axios.get(BURL + ART + "querylist.do").then(function(res) {
        vm.movieList = res.data.list
        console.log(vm.movieList);
      })
    },
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
/* .vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
} */
</style>
