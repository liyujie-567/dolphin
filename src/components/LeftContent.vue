<template>
  <div class="left-content">
    <div class="left-content-div">
      <!--今日销量-->
      <div class="subject-left-top">
        <span class="subject-left-top-borderfont">今日销量</span>
        <span class="subject-left-top-font">2019-12-12</span>
        <dv-decoration-2 style="width:200px;height:5px;" />
        <div class="subject-left-top-div">
          <div class="top-div-li top-li-left-font">成交单数</div>
          <div class="top-div-li top-li-right-font">111</div>
          <div class="top-div-li top-li-left-font">取消单数</div>
          <div class="top-div-li top-li-right-font">36</div>
          <div class="top-div-li top-li-left-font">成功占比</div>
          <div class="top-div-li top-li-right-font">75.5%</div>
          <div class="top-div-li top-li-left-font">订单总金额</div>
          <div class="top-div-li top-li-right-font">108763.5</div>
        </div>
      </div>

      <!--本月销量趋势-->
      <div style="flex: 1;">
        <dv-border-box-8>
          <div class="rose-chart">
            <div class="rose-chart-title">累计计量资金分布</div>
            <dv-charts :option="option" class="rose-chart" />
          </div>
        </dv-border-box-8>
      </div>

      <!--本月销量趋势-->
      <div style="flex: 1;">
        <dv-border-box-12>
          <div class="rose-chart">
            <div class="rose-chart-title">累计计量资金分布</div>
            <dv-charts :option="option2" class="rose-chart" />
          </div>
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoseChart',
  data () {
    return {
      option: {},
      option2: {}
    }
  },
  methods: {
    createData () {
      this.option = {
        legend: {
          textStyle: {
            color: '#fff' // 字体颜色
          },
          data: [
            {
              name: '销售额',
              color: '#aeeff0'
            },
            {
              name: '人流量',
              color: '#f1829f'
            }
          ]
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: [
          {
            name: '销售额',
            data: 'value'
          },
          {
            name: '人流量',
            data: 'value',
            position: 'right',
            max: 2000,
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '人流量',
            data: [1000, 1200, 900, 1500, 900, 1200, 1000],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(251, 114, 147, 1)', 'rgba(251, 114, 147, 0)']
            },
            lineStyle: {
              stroke: 'rgba(251, 114, 147, 1)',
              lineDash: [3, 3]
            },
            linePoint: {
              style: {
                stroke: 'rgba(251, 114, 147, 1)'
              }
            },
            yAxisIndex: 1
          },
          {
            name: '销售额',
            data: [1500, 1700, 1400, 2000, 1400, 1700, 1500],
            type: 'bar',
            gradient: {
              color: ['rgba(103, 224, 227, .6)', 'rgba(103, 224, 227, .1)']
            },
            barStyle: {
              stroke: 'rgba(103, 224, 227, 1)'
            }
          }
        ]
      }
      this.option2 = {
        legend: {
          data: ['降雨量', '气温'],
          bottom: 10
        },
        xAxis: {
          data: [
            '一月份', '二月份', '三月份', '四月份', '五月份', '六月份',
            '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'
          ],
          axisLabel: {
            style: {
              rotate: 20,
              textAlign: 'left',
              textBaseline: 'top'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            name: '降雨量',
            data: 'value',
            min: 0,
            max: 300,
            interval: 50,
            splitLine: {
              style: {
                lineDash: [3, 3]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            },
            axisTick: {
              show: false
            }
          },
          {
            name: '气温',
            data: 'value',
            position: 'right',
            min: 0,
            max: 30,
            interval: 5,
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: '{value} °C'
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '降雨量',
            data: [
              175, 125, 90, 130, 45, 65,
              65, 47, 50, 52, 45, 37
            ],
            type: 'bar',
            gradient: {
              color: ['#37a2da', '#67e0e3']
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '气温',
            data: [
              23, 18, 16, 14, 10, 8,
              6, 6, 6, 6, 6, 5
            ],
            type: 'line',
            yAxisIndex: 1,
            animationCurve: 'easeOutBounce'
          }
        ]
      }
    }
  },
  mounted () {
    this.createData()
    setInterval(this.createData, 30000)
  }
}
</script>

<style lang="less">
  @spacing: 20px;
  @fill: 100%;
  .regionSize (@regionW: 100%, @regionH: 100%) {
    width: @regionW;
    height: @regionH;
  }
  .left-content {
    .regionSize();
    box-sizing: border-box;
    .left-content-div {
      .regionSize();
      display: flex;
      flex-direction: column;
    }
  }
  .subject-left-top-borderfont {
    font-size: @spacing - 4;
    padding: 4px 6px;
    background: #18355f;
    color: #0da6b9;
    margin: 0 @spacing;
  }
  .subject-left-top-font {
    font-size: @spacing + 10;
    font-weight:bold;
    color: #3de7c9;
    vertical-align: middle;
  }
  .subject-left-top-div {
    width: @fill;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin: @spacing 0;
    .top-div-li {
      width:  @fill / 2;
      height: @spacing * 3;
      border: 1px solid #0e6484;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .top-li-left-font {
      color: #969696;
    }
    .top-li-right-font {
      font-size: @spacing + 8;
      font-weight: bold;
      color: #ee0b0b;
    }
  }
  .rose-chart {
    .regionSize();
    box-sizing: border-box;
    .rose-chart-title {
      height: 50px;
      font-weight: bold;
      text-indent: @spacing;
      font-size: @spacing;
      display: flex;
      align-items: center;
    }
    .dv-charts-container {
      height: @fill;
    }
  }
  .rose-chart {
    width: @fill;
    height:220px;
  }
</style>
