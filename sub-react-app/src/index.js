import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from "single-spa-react";
import App from './App'

const domElementGetter = () => document.querySelector('#single-content')
if (!window.singleSpaNavigate) {
    console.log('独立模式')
    ReactDOM.render(<App/>, document.querySelector('#root'))
} else {
    console.log('集成模式')
}
const reactLifeCycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter
})
//导出生命周期钩子
export const bootstrap = reactLifeCycles.bootstrap
export const mount = reactLifeCycles.mount
export const unmount = reactLifeCycles.unmount
//挂载到window变量上
window.singleReact = {
    bootstrap,
    mount,
    unmount
}
