<template>
  <div class="right-content">
    <div class="right-content-div">
      <div style="height: 270px;">
        <div class="rose-chart">
          <div class="rose-chart-title">累计计量资金分布</div>
          <dv-scroll-board :config="config" style="width:100%;height:220px;" />
        </div>
      </div>
      <div style="flex: 1;margin: 10px 0;">
        <dv-border-box-7>
          <div class="rose-chart">
            <div class="rose-chart-title">累计计量资金分布</div>
            <dv-decoration-9 style="width:300px;height:280px;margin: 0 auto;">66%</dv-decoration-9>
          </div>
        </dv-border-box-7>
      </div>
      <div style="flex: 1;">
        <dv-border-box-1>
          <div class="rose-chart">
            <div class="rose-chart-title">累计计量资金分布</div>
            <dv-capsule-chart :config="capsule" style="width:90%;height:300px;margin: 0 auto;" />
          </div>
        </dv-border-box-1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightContent',
  data () {
    return {
      config: {
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      },
      capsule: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 123
          },
          {
            name: '漯河',
            value: 98
          },
          {
            name: '郑州',
            value: 75
          },
          {
            name: '西峡',
            value: 66
          }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '单位'
      }
    }
  }
}
</script>

<style scoped lang="less">
  @spacing: 20px;
  @fill: 100%;
  .regionSize (@regionW: 100%, @regionH: 100%) {
    width: @regionW;
    height: @regionH;
  }
  .right-content {
    .regionSize{};
    box-sizing: border-box;
    .right-content-div {
      .regionSize{};
      display: flex;
      flex-direction: column;
      .rose-chart {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .rose-chart-title {
          height: 50px;
          font-weight: bold;
          text-indent: 20px;
          font-size: 20px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>
