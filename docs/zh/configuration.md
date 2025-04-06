# 配置项

|        Prop        | Type                                                   |      Default      |
|:------------------:|--------------------------------------------------------|:-----------------:|
|    `expression`    | String (必须值)                                           |         -         |
|   `displayMode`    | Boolean                                                |      `false`      |
|      `output`      | `'mathml'` / `'html'` / `'htmlAndMathml'`              | `'htmlAndMathml'` |
|      `leqno`       | Boolean                                                |      `false`      |
|      `fleqn`       | Boolean                                                |      `false`      |
|   `throwOnError`   | Boolean                                                |      `false`      |
|    `errorColor`    | String                                                 |    `'#cc0000'`    |
|      `macros`      | Object                                                 |         -         |
| `minRuleThickness` | Number                                                 |         -         |
| `colorIsTextColor` | Boolean                                                |      `false`      |
|     `maxSize`      | Number                                                 |         -         |
|    `maxExpand`     | Number                                                 |         -         |
|      `strict`      | Boolean / `'warn'` / `'error'` / `'ignore'` / Function |     `'warn'`      |
|      `trust`       | Boolean                                                |      `false`      |
|   `globalGroup`    | Boolean                                                |      `false`      |

## 设置全局配置

可在 `main.ts` 中设置全局配置

```ts
import {createApp} from 'vue'
import KatexVue from 'katex-vue'

const app = createApp()
app.use(KatexVue, {
    // 在此处设置您的全局配置
    displayMode: true,
    errorColor: '#ff5500'
})
app.mount('#app')
```

## 设置组件配置

```vue

<template>
  <katex-vue
      expression="\int_0^1x^2\mathrm{d}x"
      displayMode
      output="mathml"
      ...
  />
</template>
```
