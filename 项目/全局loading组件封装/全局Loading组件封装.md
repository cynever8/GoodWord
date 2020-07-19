<!--
 * @Date: 2020-06-16 14:34:24
 * @LastEditors: 王一丁
 * @LastEditTime: 2020-06-16 15:07:35
 * @FilePath: \MyDemod:\GIt\GoodWork\项目\全局loading组件封装\全局Loading组件封装.md
--> 
# 全局Loading组件封装

## 准备
1. 使用vuex作为公共状态管理工具
2. 通过v-show来对组件的显隐进行控制
3. vuex 写入控制组件显示和隐藏的方法
4. 通过Vue.component注册全局组件
5. 将vuex 控制显隐的方法在axios请求文件中进行调用
6. 在页面中使用Loading组件即可实现数据请求时loading组件加载

## 实现
- 下面的实现方法不能完全照抄,只是一个思路,在实际使用中,可以结合模块私有化等其他技术优化.
- 如果要单独在某个请求中进行使用,要去除axios请求中的方法,通过this.$store.state.loading
1. 写一个Loading组件.
2. Vuex准备好
```js
const prompt = {
    state: {
        loading: false
    },
    mutations: {
        showLoading(state) {
            state.loading = true;
        },
        hideLoading(state) {
            state.loading = false;
        }
    },
    actions: {
        showLoading(context) {
            context.commit("showLoading");
        },
        hideLoading(context) {
            context.commit("hideLoading");
        }
    },
    namespaced: true
};
export default prompt;
```  
3. 将方法在请求中调用
```js
axios.interceptors.request.use(
    config => {
        store.commit('showLoading')
    error => {
        store.commit('hideLoading')
    })
axios.interceptors.response.use(
    response => {
        store.commit('hideLoading')
    },
 
    error => {
        store.commit('hideLoading')
    }
);
```

4. 将组件注册为全局方法
```js
import Vue from "vue";
import Loading from "./loading"

let componentMap = [
    Loading,
]

componentMap.forEach((item) => {
    Vue.component(item.name, item)
})
```

5. 在组件中进行调用
```html
<Loading v-show="$store.state.loading" />
```