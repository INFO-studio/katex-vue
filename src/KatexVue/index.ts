import { App, Plugin } from 'vue'
import KatexVue from '@/KatexVue/KatexVue.vue'
import {KatexVueGlobalProps} from '@/KatexVue/types';

export const KatexVuePlugin: Plugin = {
    install(app: App, options?: KatexVueGlobalProps) {
        app.provide('katex-vue-config', options || {})
        app.component('katex-vue', KatexVue)
    }
}

export { KatexVue }