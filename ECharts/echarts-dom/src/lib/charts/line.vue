<!--
 * @Date: 2020-11-15 22:53:50
 * @LastEditors: 王一丁
 * @LastEditTime: 2020-11-15 23:42:26
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
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        color: ['#000', '#ddd'],
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
          {
            data: [1820, 1932, 1901, 1934, 290, 130, 1320],
            type: 'line',
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
    this.getEcharts(this.$refs.chart, this.option);
  },
};
</script>

<style></style>
