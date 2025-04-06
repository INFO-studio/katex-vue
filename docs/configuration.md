# Configuration

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
|     `maxSize`      | Number                                                 |         -         |
|    `maxExpand`     | Number                                                 |         -         |
|      `strict`      | Boolean / `'warn'` / `'error'` / `'ignore'` / Function |     `'warn'`      |
|      `trust`       | Boolean                                                |      `false`      |
|   `globalGroup`    | Boolean                                                |      `false`      |

## Set Global Configuration

You can set the global configuration on `main.ts`

```ts
import {createApp} from 'vue'
import KatexVue from 'katex-vue'

const app = createApp()
app.use(KatexVue, {
    // your global default config
    displayMode: true,
    errorColor: '#ff5500'
})
app.mount('#app')
```

## Set Component Configuration
