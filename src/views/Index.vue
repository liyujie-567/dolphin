<template>
    <div class="content-bg">
      <dv-full-screen-container>
        <dv-border-box-11 title="实时数据监测">
          <div class="content-flex">
            <div class="content-div">
              <div class="content-col">
                <!--左边区域-->
                <div class="content-one">
                  <left-content />
                </div>
                <!--中间区域-->
                <div class="content-two">
                  <content-top />
                </div>
                <!--右边区域-->
                <div class="content-one">
                  <right-content />
                </div>
              </div>
            </div>
          </div>
        </dv-border-box-11>
      </dv-full-screen-container>
    </div>
</template>

<script>
import LeftContent from '../components/LeftContent'
import ContentTop from '../components/ContentTop'
import RightContent from '../components/RightContent'

export default {
  name: 'Index',
  components: {
    RightContent,
    LeftContent,
    ContentTop
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped  lang="less">
@spacing: 20px;
@fill: 100%;
@font_color: #00f0ff;
.regionSize (@regionW: 100%, @regionH: 100%) {
  width: @regionW;
  height: @regionH;
}
.content-bg{
  .regionSize();
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url('../assets/img/bg.png');
    background-size: @fill @fill;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    .content-flex {
      .regionSize();
      display: flex;
      justify-content: center;
      align-items: center;
      .content-div {
        .regionSize(@fill - 2, @fill - 10);
        margin-top: @spacing * 2;
        .content-col {
          .regionSize();
          display: flex;
          .content-one {
            flex: 1;
            display:flex;
            flex-flow: column;
          }
          .content-two {
            flex: 2;
          }
        }
      }
    }
  }
}
</style>
