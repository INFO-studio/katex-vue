import { App, Plugin } from 'vue'
import KatexVue from './KatexVue.vue'
import {KatexOptions} from "katex";

export const KatexVuePlugin: Plugin = {
    install(app: App, options?: KatexOptions) {
        app.provide('katex-vue-config', options || {})
        app.component('katex-vue', KatexVue)
    }
}

export { KatexVue }