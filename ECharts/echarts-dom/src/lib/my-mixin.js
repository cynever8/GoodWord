/*
 * @Date: 2020-11-15 22:54:56
 * @LastEditors: 王一丁
 * @LastEditTime: 2020-11-15 23:45:06
 */
/* import Vue from 'Vue';
Vue.mixin({
    methods: {
        getEcharts(dom, style, onClick) {
            var myChart = this.$echarts.init(dom);
            myChart.setOption(style);
            if (onClick) myChart.on('click', onClick);
        },
    }
}) */
import Bar from "./charts/bar";
import Line from "./charts/line";
export default {
    install(Vue){
        Vue.mixin({
            methods: {
                getEcharts(dom, style, onClick) {
                    var myChart = this.$echarts.init(dom);
                    myChart.setOption(style);
                    if (onClick) myChart.on('click', onClick); // 点击事件
                },
            }
        })

        Vue.component('Bar',Bar)
        Vue.component('Lines',Line)
    }
}