import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            outDir: 'dist',
            include: ['src/**/*'],
            staticImport: true,
            insertTypesEntry: true,
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'KatexVue',
            fileName: (format) => `katexVue.${format}.js`,
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: ['vue', 'katex', 'katex/dist/katex.min.css'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: 'named'
            }
        },
    }
})