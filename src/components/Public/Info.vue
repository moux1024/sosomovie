<template lang="html">
  <div class="info" >
    <div class="panel">
      <div class="panel-img">
        <img :src="BURL+infomation.basicPic" :alt="infomation.basicTitle">
      </div>
      <div class="panel-text">
        <p class="title-cn">{{infomation.articleName}}</p>
        <p class="title-en">{{infomation.articleEngName}}</p>
        <p class="director">导演：{{infomation.articleSource}}</p>
        <p class="stars">

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
console.log(this.infomation)
export default {
  name: 'info',
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
        }
    }
    .panel-text {
        margin-left: 37%;
        text-align: left;
        font-size: 0.75rem;
        .title-cn {
            padding-top: 0.5rem;
            font-size: 1.625rem;
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
                float: left;
            }
            .imdbstars {
                position: relative;
                width: 6rem;
                height: 0.94rem;
                float: left;
                display: block;
                .imdbstars1 {
                    display: block;
                    position: absolute;
                    left: 0;
                    border-top: 20%;
                    border-color: #fff;
                    height: 80%;
                    width: 100%;
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAAAYCAYAAAFmV5SmAAAABGdBTUEAALGPC/xhBQAAA5ZJREFUaAXtWL2PTUEUf28REZGNtwpbKEjWJkIvPlqJwp9ApdD4D1QShSioVKKgsDYolCLrbUi2ETQqLZ2EiIhg8ftd90zOnZl7587L7nPfvDnJeefM+ZiZ87tn7sfr/wH1wnQCIS+CYZhrKEHQH4FPqnFlIfjMGOpRcCW3ZwVwqBPMuFBqfFyc/uIH8jgHI1KRK9UUkhOJAapTAmy15ZvyOAlJTdR6zMA+fyS5D9JjsVPSR9nkb/JF5dZNRHtJzzmhJtiXxKntoosPcqRcaYL3nBCTXCvlUE1skPQsyrANz629XLIBJdsdQpWg1Na5ZkNj7Re1U2ddwG6OkcTBxuNGGopNS9h59yFteC57Z6QGLLazCbnFJRPYBAUuJjql9jf5GNvkb/JJ7gyVAH2gH5MVpxDqaiBeu+NzuWsPrXFW2O96fCFTcrnFZbeqfqVhh2/Z8jcNk8wlSE81KCEd8bcVSlORqzvpZRNAAOaxAsdWk841D1oCpO/ONmBExbbpccq5+klyg0UDi6tWm9wqwbioQbH0pHMrnaQKfwudj8pTytZWTS7XC5IcndAR86GWYq4+blKzvgnfE2NLmWSu00nSCQJKTDelmstOOg+eZ4EkAUfkP2th3wPbObGXcjpy0Sk7rMJrh4idYWcpmopcdtI3FL2rFpnSgZitUNetuKnIlRv3F4AwsAAwQ/i2Y/DTGKpK8rkCEsu+XK29MrpQGbmDtHPRJUL809BLCNgrQTUy6VzzCqCfbADiANCahe21oEZwRLdl8rnSGSwc+gDMm7HQLyj7Sp/YHJl6rv6rxCneYyi+5WBfABPAcVFedzxIj4xzTCOd5qkSQl2L4PUx1JfXnQCc2zbSGWkgLdFEhza5mfK6AHwScDYvSapBvkJ/p/gBXoLeKH9FRZH7YTgLXgAfLOVuyFjK604yzmiEY7FXPCYe88+BfZTXjQEyEAuA/yvO8mhbwUZ2BvYa5cZ8W8B3wE2U141C1Q0GuJ3AWRpJLvYalFl3u+0tyN8GfigTtpR53fYQF5Fdw9luJLnuy5F1SXFXZIIRZV63BfDAtnM46/+2dQkrehChP4uI9YXmdX2ouLbO4ez7auO2B/hS++TuP2zBafmIqLlwpDcir+uFxTV2DWffHemJ3UTY9Dz4JvgHmPQbfB+86JbYW/LY2pjyupOMM7vCIr74HgFfAn+2fHXD73BcBx8Gx75oy5x5XUGiXnYW578CnLHWlXya8AAAAABJRU5ErkJggg==");
                    background-size: 80%;
                    background-position: left;
                    background-repeat: no-repeat;
                    z-index: 2;
                }
                .starfill1 {
                    float: left;
                    height: 80%;
                    background-color: red;
                    z-index: 1;
                }
                .starfill2 {
                    float: left;
                    width: 6rem;
                    height: 80%;
                    background-color: #aaa;
                    z-index: 1;
                }
                .starfill1.w0 {
                    width: 7%;
                }
                .starfill2.w0 {
                    width: 72%;
                }
                .w1 {
                    width: 7%;
                }
                .w0 {
                    width: 0;
                }
                .w2 {
                    width: 14%;
                }
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
