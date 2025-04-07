<script setup lang="ts">
import {renderToString, KatexOptions} from "katex";
import {computed, onMounted, ref, watch} from "vue";
import 'katex/dist/katex.min.css';
import {useKatexVueOptions} from "./useKatexVueOptions";

const props = defineProps<
    { expression: string } & Partial<KatexOptions>
>()

const katexVueOptions = useKatexVueOptions()

const katexVueContainer = ref<HTMLElement>()

const displayMode = ref<boolean>(false);

function renderMath() {
  if (!katexVueContainer.value) return
  const {expression, ...propOptions} = props
  const componentOptions = computed(() => katexVueOptions.getComponentOptions(propOptions))
  displayMode.value = componentOptions.value?.displayMode ?? false;
  katexVueContainer.value.innerHTML = renderToString(expression, componentOptions.value)
}

watch(
    () => props,
    () => {
      renderMath()
    },
    {
      deep: true
    }
)

onMounted(() => {
  renderMath()
});
</script>

<template>
  <span ref="katexVueContainer" />
</template>

<style scoped></style>