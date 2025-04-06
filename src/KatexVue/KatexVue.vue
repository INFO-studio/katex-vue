<script setup lang="ts">
import {renderToString, KatexOptions} from "katex";
import {computed, inject, onMounted, ref} from "vue";
import 'katex/dist/katex.min.css';

const props = defineProps<
    { expression: string } & Partial<KatexOptions>
>()

const globalConfig = inject("katex-vue-config", {}) as KatexOptions

const defaultOptions: KatexOptions = {
  displayMode: false,
  output: undefined,
  leqno: false,
  fleqn: false,
  throwOnError: false,
  errorColor: '#cc0000',
  macros: undefined,
  minRuleThickness: undefined,
  colorIsTextColor: false,
  maxSize: undefined,
  maxExpand: undefined,
  strict: 'warn' as const,
  trust: false,
  globalGroup: false
}

const mergedOptions = computed(() => ({
  displayMode: props.displayMode ?? globalConfig.displayMode ?? defaultOptions.displayMode,
  output: props.output ?? globalConfig.output ?? defaultOptions.output,
  leqno: props.leqno ?? globalConfig.leqno ?? defaultOptions.leqno,
  fleqn: props.fleqn ?? globalConfig.fleqn ?? defaultOptions.fleqn,
  throwOnError: props.throwOnError ?? globalConfig.throwOnError ?? defaultOptions.throwOnError,
  errorColor: props.errorColor ?? globalConfig.errorColor ?? defaultOptions.errorColor,
  macros: props.macros ?? globalConfig.macros ?? defaultOptions.macros,
  minRuleThickness: props.minRuleThickness ?? globalConfig.minRuleThickness ?? defaultOptions.minRuleThickness,
  colorIsTextColor: props.colorIsTextColor ?? globalConfig.colorIsTextColor ?? defaultOptions.colorIsTextColor,
  maxSize: props.maxSize ?? globalConfig.maxSize ?? defaultOptions.maxSize,
  maxExpand: props.maxExpand ?? globalConfig.maxExpand ?? defaultOptions.maxExpand,
  strict: props.strict ?? globalConfig.strict ?? defaultOptions.strict,
  trust: props.trust ?? globalConfig.trust ?? defaultOptions.trust,
  globalGroup: props.globalGroup ?? globalConfig.globalGroup ?? defaultOptions.globalGroup
}))
console.log(props.output, globalConfig.output, defaultOptions.output)
const renderedExpression = computed(() => {
  return renderToString(props.expression, {
    ...mergedOptions.value,
  })
})

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <span v-if="isMounted" v-html="renderedExpression" />
</template>

<style scoped></style>