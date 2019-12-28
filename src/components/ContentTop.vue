<template>
    <div class="content-top">
      <div class="content-div">
        <div class="content-ul-top">
          <div class="content-li">
            <div>订单总金额</div>
            <dv-digital-flop :config="topNum" style="height:50px;" />
          </div>
          <div class="content-li">
            <div>订单总金额</div>
            <dv-digital-flop :config="topNum" style="height:50px;" />
          </div>
          <div class="content-li">
            <div>订单总金额</div>
            <dv-digital-flop :config="topNum" style="height:50px;" />
          </div>
          <div class="content-li">
            <div>订单总金额</div>
            <dv-digital-flop :config="topNum" style="height:50px;" />
          </div>
        </div>
        <div class="content-ul-con">
          <dv-flyline-chart :config="config" style="width:100%;height:100%;" />
        </div>
        <div class="content-ul-bottom">
          <div class="content-ul-bottom-div">
            <div class="content-ul-bottom-div-li content-ul-bottom-div-li-color1">
              <div>平均配送 间/分</div>
              <div>9.3</div>
            </div>
            <div class="content-ul-bottom-div-li content-ul-bottom-div-li-color2">
              <div>平均配送 间/分</div>
              <div>9.3</div>
            </div>
            <div class="content-ul-bottom-div-li content-ul-bottom-div-li-color3">
              <div>平均配送 间/分</div>
              <div>9.3</div>
            </div>
            <div class="content-ul-bottom-div-li content-ul-bottom-div-li-color4">
              <div>平均配送 间/分</div>
              <div>9.3</div>
            </div>
            <div class="content-ul-bottom-div-li content-ul-bottom-div-li-color1">
              <div>平均配送 间/分</div>
              <div>9.3</div>
            </div>
          </div>
          <dv-decoration-10 style="width:100%;height:5px;margin-top: 10px;" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ContentTop',
  data () {
    return {
      topNum: {
        number: [9923],
        toFixed: 2,
        content: '{nt}'
      },
      config: {
        centerPoint: [0.48, 0.35],
        points: [
          {
            position: [0.52, 0.235],
            text: '新乡'
          },
          {
            position: [0.43, 0.29],
            text: '焦作'
          },
          {
            position: [0.59, 0.35],
            text: '开封'
          },
          {
            position: [0.53, 0.47],
            text: '许昌'
          },
          {
            position: [0.45, 0.54],
            text: '平顶山'
          },
          {
            position: [0.36, 0.38],
            text: '洛阳'
          },
          {
            position: [0.62, 0.55],
            text: '周口'
          },
          {
            position: [0.56, 0.56],
            text: '漯河'
          },
          {
            position: [0.37, 0.66],
            text: '南阳'
          },
          {
            position: [0.55, 0.81],
            text: '信阳'
          },
          {
            position: [0.55, 0.67],
            text: '驻马店'
          },
          {
            position: [0.37, 0.29],
            text: '济源'
          },
          {
            position: [0.20, 0.36],
            text: '三门峡'
          },
          {
            position: [0.76, 0.41],
            text: '商丘'
          },
          {
            position: [0.59, 0.18],
            text: '鹤壁'
          },
          {
            position: [0.68, 0.17],
            text: '濮阳'
          },
          {
            position: [0.59, 0.10],
            text: '安阳'
          }
        ],
        k: 0.5,
        bgImgUrl: require('../assets/img/map.jpg'),
        centerPointImg: {
          url: require('../assets/img/mapCenterPoint.png')
        },
        pointsImg: {
          url: require('../assets/img/mapPoint.png')
        }
      }
    }
  },
  created () {
  },
  methods: {}
}
</script>

<style scoped lang="less">
  @spacing: 20px;
  @fill: 100%;
  .regionSize (@regionW: 100%, @regionH: 100%) {
    width: @regionW;
    height: @regionH;
  }
  .content-top {
    .regionSize();
    box-sizing: border-box;
    padding: 0 @spacing;
    .content-div {
      .regionSize();
      display: flex;
      flex-direction: column;
      .content-ul-top {
        width: @fill;
        height: 80px;
        display: flex;
        .content-li{
          flex: 1;
          text-align: center;
        }
      }
      .content-ul-con {
        width: @fill;
        flex: 1;
        margin: @spacing 0;
      }
      .content-ul-bottom {
        width: @fill;
        height: @spacing * 4;
        .content-ul-bottom-div {
          width: @fill;
          display: flex;
          .content-ul-bottom-div-li {
            flex: 1;
            line-height: @spacing + 10;
            background: #072d4f;
            margin-right: @spacing / 2;
            padding: @spacing / 2 0 0 @spacing / 2
          }
          .content-ul-bottom-div-li:last-child {
            margin-right: 0;
          }
          .content-ul-bottom-div-li-color1 {
            border-left: 6px solid #994933;
          }
          .content-ul-bottom-div-li-color2 {
            border-left: 6px solid #8a822f;
          }
          .content-ul-bottom-div-li-color3 {
            border-left: 6px solid #206681;
          }
          .content-ul-bottom-div-li-color4 {
            border-left: 6px solid #8b2677;
          }
        }
      }
    }
  }
</style>
