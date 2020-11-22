<!--
 * @Date: 2020-11-15 22:53:14
 * @LastEditors: 王一丁
 * @LastEditTime: 2020-11-15 23:44:33
-->
<template>
  <div>
    <div ref="chart" :style="{ width, height }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {
          type: 'showTip',
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765',
            },
          },
          formatter(data) {
            // 鼠标浮动自定义
            return `${data[0].axisValue} ${data[0].data}`;
          },
          // formatter: '{b0}: {c0}<br />{b1}: {c1}'
        },
        xAxis: {
          data: this.optionData.map((r) => r.name), // 使用map函数
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: this.optionData.map((r) => r.money),
          },
        ],
      },
    };
  },
  props: {
    optionData: {
      required: false,
      type: Array,
      default: () => {
        return [];
      },
    },
    width: {
      type: String,
      default: '500px',
    },
    height: {
      type: String,
      default: '400px',
    },
  },
  mounted() {
    this.getEcharts(this.$refs.chart, this.option, (data) => {
      // 使用mixin 点击事件
      console.log('data', data);
    });
  },
  methods: {},
};
</script>

<style>
/* .main {
  height: 500px;
  width: 500px;
} */
</style>
