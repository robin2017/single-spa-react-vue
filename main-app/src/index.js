import * as singleSpa from 'single-spa'
const runScript = async (url) => {
    return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        const firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentNode.insertBefore(script, firstScript)
    })
}
singleSpa.registerApplication({
    name: 'subReact',
    app: async () => {
        await runScript('react-static/js/bundle.js')
        await runScript('react-static/js/0.chunk.js')
        await runScript('react-static/js/main.chunk.js')
        return window.singleReact
    },
    activeWhen: location => location.pathname.startsWith('/sub_react')
})
singleSpa.registerApplication({
    name: 'subVue',
    app: async () => {
        await runScript('vue-static/js/chunk-vendors.js')
        await runScript('vue-static/js/app.js')
        return window.singleVue
    },
    activeWhen: location => location.pathname.startsWith('/sub_vue')
})
singleSpa.start()