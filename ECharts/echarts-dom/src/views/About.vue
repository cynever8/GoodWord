<template>
  <div class="about">
    about
    <div class="main" ref="chart"></div>
    <div class="main" ref="chart2"></div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    let optionData = [
      {
        name: '衬衫',
        money: 1,
      },
      {
        name: '羊毛衫',
        money: 2,
      },
      {
        name: '雪纺衫',
        money: 3,
      },
      {
        name: '裤子',
        money: 4,
      },
      {
        name: '高跟鞋',
        money: 5,
      },
    ];
    // 绘制图表
    return {
      option: {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        xAxis: {
          data: optionData.map((r) => r.name),
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: optionData.map((r) => r.money),
          },
        ],
      },
      option2: {
        title: {
          text: 'ECharts 入门示例',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
        ],
      },
    };
  },
  created() {
    // console.log('this.optionData.map(r=>r.name),',this.optionData.map(r=>r.name),);
  },
  mounted() {
    this.getEcharts(this.$refs.chart,this.option);
    this.getEcharts(this.$refs.chart2,this.option2);
  },
  methods: {
    getEcharts(dom, style) {
      var myChart = this.$echarts.init(dom);
      myChart.setOption(style);
    },
  },
};
</script>

<style scoped>
.main {
  height: 500px;
  width: 500px;
}
</style>
