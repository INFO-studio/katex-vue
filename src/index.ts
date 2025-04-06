import {App, Plugin} from 'vue'
import {KatexVuePlugin} from './KatexVue'

const plugin: Plugin = {
    install(app: App, options?: any) {
        app.use(KatexVuePlugin, options)
    }
}

export {plugin as default}
export * from './KatexVue'