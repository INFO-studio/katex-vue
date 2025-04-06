# Get Started

## Installation

### Download and add katex-vue into your project
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

### And now you can use it
```vue
<script setup>
  import { KatexVue } from 'katex-vue'
  const expression = "\\int_0^\\infty x^2 \\mathrm{d} x"
</script>

<template>
  <katex-vue :expression="expression" displayMode />
</template>
```