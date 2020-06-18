import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false
const appOptions = {
    pEl: '#single-content',
    render: h => h(App),
}
if (!window.singleSpaNavigate) {
    console.log('独立模式')
    delete appOptions.pEl
    new Vue(appOptions).$mount('#app')
} else {
    console.log('集成模式')
}
const vueLifeCycles = singleSpaVue({
    Vue,
    appOptions
})
//导出生命周期钩子
export const bootstrap = vueLifeCycles.bootstrap
export const mount = (props) => {
    //在挂载点下添加vue挂载点
    let dom = document.querySelector(appOptions.pEl)
    let id = `randomId-${Math.random().toString(16).slice(5)}`
    appOptions.el = `#${id}`
    dom.innerHTML = `<div id="${id}"></div>`
    return vueLifeCycles.mount(props)
}
export const unmount = vueLifeCycles.unmount

