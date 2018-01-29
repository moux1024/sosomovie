<template lang="html">
  <div class="detail" >
    <p class="header">
      <span class="back" @click="$router.go(-1)"></span>
      <span class="share"></span>
    </p>

    <div class="short-cut">
      <!-- todo:缺省图片 -->
      <div class="video">
        <img :src="movieData.moviePoster.split('\|\|\|\|\r\n')[0]||''" alt="">
        <div class="play">

        </div>
      </div>
      <div class="text-container">
        <Info :info="infomation"></Info>
      </div>
    </div>
    <div class="info-text">
      <p>原名：<span>{{movieData.articleName||'未知'}}</span></p>
      <p>又名：<span>{{movieData.articleEngName||'未知'}}</span></p>
      <p>导演：<span>{{movieData.movieDirector||'未知'}}</span></p>
      <p>编剧：<span>{{movieData.textCn||'未知'}}</span>TODO</p>
      <p>主演：<span>{{movieData.movieCast||'未知'}}</span></p>
      <p>类型：<span>{{movieData.articleType||'未知'}}</span></p>
      <p>国家：<span>{{movieData.movieCountry||'未知'}}</span></p>
      <p>语言：<span>{{movieData.movieLanguage||'未知'}}</span></p>
      <p>上映：<span>{{movieData.movieYear||'0'}}</span></p>
      <p>片长：<span>{{movieData.articleLength||'0'}}</span></p>
      <p>IMDb：<span>{{movieData.movieIMDb||'0'}}</span></p>
    </div>
    <div class="synopsis">
      <p class="title">
        {{movieData.articleName}}的剧情简介
      </p>
      <div class="synopsis-text" :class="showMore?'all':''">
        <p v-for="p in movieData.basicDescription.split('\r\n　　')">{{p}}</p>
        <div class="after" @click="toggle">
          {{this.showMore?"折叠":"展开全文"}}
        </div>
      </div>
    </div>
    <div class="source">
      <div class="trailerURL btn btn-primary">
        磁力链接
      </div>
      <div class="subtitleURL btn btn-primary">
        字幕下载
      </div>
    </div>
    <div class="maylike">
      <p class="title">你可能还会喜欢</p>
      <div class="more">
        <div class="cards" v-for="item in testMoreData">
          <a :href="'#/detail/'+item.id">
            <img :src="item.url" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="talk">
      <p class="title">评论</p>
      <div class="talks">
        <iframe src="" width="" height="">sometalk</iframe>
      </div>
    </div>
    <div class="footer">
      <p class="text-center">
        ©2017 Copyright | 京备15001923号-4
      </p>
      <p>
        声明：本站为资讯类网站，不提供任何影视作品上传、下载、存储服务，版权归属电影制作公司，其他问题请联系我XXXX@XX.com
      </p>
    </div>
    <div class="dialog-container">
      <div class="dialog-background">
        <div class="dialog">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '@/components/Public/Info';
import axios from 'axios';
export default {
  name: 'detail',
  props: [
    'example'
  ],
  components: {
    Info
  },
  data() {
    return {
      msg: 'this is detail!',
      testMoreData: [{
        url: "../static/img/01.jpg",
        id: 1
      }, {
        url: "../static/img/02.jpg",
        id: 2
      }, {
        url: "../static/img/03.jpg",
        id: 3
      }, {
        url: "../static/img/04.jpg",
        id: 4
      }, {
        url: "../static/img/05.jpg",
        id: 5
      }],
      playerOptions: {},
      movieData: {
        basicPic: "/upload/article/1/1460380829450.jpg",
        basicDescription: "",
        moviePoster:""
      },
      zIndex: 1,
      showMore: false,
      infomation: {

      }
      // dialogOpen: false,
      // dialogInfo: {
      //   title: "磁力链接",
      //   links: [{
      //       name: "1080p",
      //       size: "18.92G",
      //       url: "url1"
      //     },
      //     {
      //       name: "720p",
      //       size: "6.2G",
      //       url: "url2"
      //     }
      //   ],
      //   footer: "磁力链来源于网络，版权归片方所有"
      // }
    }
  },
  methods: {
    toggle: function() {
      this.showMore = !this.showMore;
      console.log(this.showMore);
    },
    load() {
      var vm = this;
      var id = location.hash.split("/")[2];
      axios.get(BURL + ART + id + "/detail.do.do").then(function(res) {
        vm.movieData = res.data
        vm.infomation = res.data
      })
    },

    openDialog(type) {
      this.dialogOpen = true;
      if (type = 1) {

      }
    },
    download(url) {
      window.open(url)
    }
  },
  beforeMount() {
    console.log();
    this.load();
  }
}
</script>

<style lang="less">
.header {
    position: fixed;
    width: 90%;
    margin: 1rem;
    height: 2rem;
    line-height: 2rem;
    z-index: 1;
    span::after {
        display: block;
        height: 1.25rem;
        width: 1.25rem;
        content: "";
        background-size: contain;
    }
    .back {
        float: left;
    }
    .share {
        float: right;
    }
    .back::after {
        background-image: url("../../assets/back@2x.png");
    }
    .share::after {
        background-image: url("../../assets/share@2x.png");
    }
}
.header::before {
    content: "";
    position: fixed;
    height: 3.5rem;
    background: #ddd;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0.5;
    z-index: -1;
}

.short-cut {
    position: relative;
    margin-bottom: 2rem;
    .video {
        width: 100%;
        height: 16rem;
        text-align: center;
        overflow: hidden;
        img {
          width: 100%;
        }
        .play {
          width: 2rem;
          height: 2rem;
          position: absolute;
          top: 4rem;
          display: inline-block;
          background: url("../../assets/play@2x.png") no-repeat;
          background-size: 100%;
        }
    }
    .text-container {
        position: absolute;
        left: 0;
        top: 8rem;
        width: 100%;
        height: 10rem;
        text-align: center;
    }
}

.info-text {
    position: relative;
    overflow: hidden;
    text-align: left;
    padding: 1rem;
    p {
        font-size: 0.75rem;
        padding: 0.2rem 0;
        span {
            font-size: 0.9rem;
        }
    }
}
.synopsis {
    padding: 0 1rem;
    p.title {
        font-size: 1.625rem;
        line-height: 3rem;
    }
    div.synopsis-text {
        position: relative;
        height: auto;
        max-height: 12.5rem;
        font-size: 0.8rem;
        text-indent: 2rem;
        overflow: hidden;
    }
    div.synopsis-text.all {
        max-height: inherit;
    }
}
.source {
    width: 93%;
    margin: 0 auto 2rem;
    div.btn {
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        margin-top: 0.8rem;
        border-radius: 5px;
        font-size: 0.875rem;
    }
    div.btn-primary {
        color: #fff;
        background-color: #FA4455;
    }
}
.maylike {
    padding: 0 1rem;
    p.title {
        font-size: 1.625rem;
        line-height: 3rem;
    }
    div.more {
        height: 8rem;
        overflow-x: scroll;
        white-space: nowrap;
        div.cards {

            display: inline-block;
            height: 8rem;
            width: 6rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        div.cards::before {
            display: block;
            content: "";
        }
    }
}
.talk {
    padding: 0 1rem;
    p.title {
        font-size: 1.625rem;
        line-height: 3rem;
    }
}
.footer {
    width: 100%;
    margin: 1rem auto 0;
    background-color: #000;
    color: #fff;
    font-size: 0.75rem;
    p {
        padding: 1.2rem;
    }
}
.detail {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: auto;
}
.text-center {
    text-align: center;
}
</style>
