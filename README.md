# Katex-vue

A Vue component for LaTeX expression rendering using KaTeX.
More information in [Katex Vue](https://katex-vue.info-c.cn)

## Features

- 🔧 Configurable global defaults
- 📦 Supports both SSR and CSR
- ⚡️ Optimized rendering performance
- 🔄 Reactive expression updates

## Usage

### Installation

Using npm

```sh [npm]
$ npm add -D katex katex-vue
```

Using pnpm

```sh [pnpm]
$ pnpm add -D katex katex-vue
```

Using yarn

```sh [yarn]
$ yarn add -D katex katex-vue
```

Using bun

```sh [bun]
$ bun add -D katex katex-vue
```

### Global Registration

```js
import {createApp} from 'vue'
import KatexVue from 'katex-vue'

const app = createApp()
app.use(KatexVue, {
    // your global default config
    displayMode: true,
    errorColor: '#ff5500'
})
```

## Component Usage

```vue

<script setup>
  import {KatexVue} from 'katex-vue'

  const expression = "\\int_0^\\infty x^2 \\mathrm{d} x"
</script>

<template>
  <katex-vue :expression="expression" displayMode/>
</template>
```

## Configuration Options

|        Prop        | Type                                                   |      Default      |
|:------------------:|--------------------------------------------------------|:-----------------:|
|    `expression`    | String (Required)                                      |         -         |
|   `displayMode`    | Boolean                                                |      `false`      |
|      `output`      | `'mathml'` / `'html'` / `'htmlAndMathml'`              | `'htmlAndMathml'` |
|      `leqno`       | Boolean                                                |      `false`      |
|      `fleqn`       | Boolean                                                |      `false`      |
|   `throwOnError`   | Boolean                                                |      `false`      |
|    `errorColor`    | String                                                 |    `'#cc0000'`    |
|      `macros`      | Object                                                 |         -         |
| `minRuleThickness` | Number                                                 |         -         |
| `colorIsTextColor` | Boolean                                                |      `false`      |
|     `maxSize`      | Number                                                 |    `Infinity`     |
|    `maxExpand`     | Number                                                 |      `1000`       |
|      `strict`      | Boolean / `'warn'` / `'error'` / `'ignore'` / Function |     `'warn'`      |
|      `trust`       | Boolean                                                |      `false`      |
|   `globalGroup`    | Boolean                                                |      `false`      |

**Priority**: Component props > Global config > Default values

Check on [KaTeX Document](https://katex.org/docs/options)

## Licence

MIT © 2025 Infoc