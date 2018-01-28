<template lang="html">
  <div class="info" >
    <div class="panel">
      <div class="panel-img">
        <img :src="BURL+infomation.basicPic" :alt="infomation.basicTitle">
      </div>
      <div class="panel-text">
        <p class="title-cn">{{infomation.articleName||'未知'}}</p>
        <p class="title-en">{{infomation.articleEngName||'未知'}}</p>
        <p class="director">导演：{{infomation.articleSource||'未知'}}</p>
        <p class="stars">
          <rater v-model="infomation.movieIMDb" active-color="#FA4455" disabled :margin="0" :font-size="14"></rater>
          <span>{{infomation.movieIMDb}}</span>
          <img class="imdbmark" src="static/img/IMDb@2x.png">
        </p>
        <p class="tips">
          <span>{{infomation.movieYear||"2017"}}</span>
          <span>{{infomation.movieCountry||"国家未知"}}</span>
          <span>{{infomation.movieType||"类型未知"}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Rater
} from 'vux'
console.log(this.infomation)
export default {
  name: 'info',
  components: {
    Rater
  },
  props: [
    'info'
  ],
  data() {
    return {
      msg: 'this is info!',
      infomation: this.info,
      BURL: BURL
    }
  }
}
</script>

<style lang="less">
.panel {
    position: relative;
    height: 8rem;
    width: 93%;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 5px 5px 10px #ddd;
    .panel-img {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        width: 6rem;
        height: 8rem;
        img {
            border-radius: 8px;
            height: 100%;
            width: inherit;
        }
    }
    .panel-text {
        margin-left: 37%;
        text-align: left;
        font-size: 0.75rem;
        .title-cn {
            padding-top: 0.5rem;
            font-size: 1.625rem;
            color: #3F3D3D;
            line-height: 1.625rem;
        }
        .director,
        .stars,
        .tips,
        .title-en {
            line-height: 1.25rem;
        }
        .stars {
            line-height: 1rem;
            height: 1rem;
            color: #FA4455;
            .imdbscore {
                float: left;
            }
            img {
                height: 1rem;
                width: 2rem;
                display: inline-block;
                float: none;
                vertical-align: bottom;
            }

        }
        .tips {
            span {
                display: inline-block;
                border: 1px solid #989A9C;
                border-radius: 2px;
                padding: 1px;
                color: #989A9C;
                font-size: 0.5rem;
                padding: 0 0.1rem;
            }
        }

    }
}
</style>
