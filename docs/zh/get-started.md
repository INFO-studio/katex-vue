# 快速开始

## 安装

### 下载 katex-vue 并将其加入至你的项目
::: code-group

```sh [npm]
$ npm add -D katex katex-vue
```

```sh [pnpm]
$ pnpm add -D katex katex-vue
```

```sh [yarn]
$ yarn add -D katex katex-vue
```

```sh [bun]
$ bun add -D katex katex-vue
```

:::

### 然后就可以使用了
```vue
<script setup>
  import { KatexVue } from 'katex-vue'
  const expression = "\\int_0^\\infty x^2 \\mathrm{d} x"
</script>

<template>
  <katex-vue :expression="expression" displayMode />
</template>
```