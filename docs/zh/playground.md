<script setup>
import KatexVue from '../../src/KatexVue/KatexVue.vue';
import {computed, ref, watch} from "vue";

const latexExpression = ref("\\tag A\\underbrace{\\overbrace{a+b}^6 \\cdot \\overbrace{c+d}^7}_\\text{example of text} = 42\\color{orange}{\\prod_{\\substack{p \\leq x \\\\\\text{p prime}}}} \\left( 1 - \\dfrac{1}{p} \\right)");
const displayMode = ref(true);
const leqno = ref(false);
const fleqn = ref(false);
const throwOnError = ref(false);
const errorColor = ref("#cc0000");
const minRuleThickness = ref(0);
const colorIsTextColor = ref(false);
const maxExpand = ref(1000);

watch(displayMode, () => {
  if (latexExpression.value.startsWith('\\tag A')) {
    latexExpression.value = latexExpression.value.replace(/^\\tag A\s*/, '')
  }
});

const code = computed(()=>{
    let code = '<katex-vue ';
    code += '\n    expression=' + JSON.stringify(latexExpression.value ? latexExpression.value : '\\KaTeX'); 
    code += displayMode.value ? '\n    displayMode' : '';
    code += leqno.value ? '\n    leqno' : '';
    code += fleqn.value ? '\n    fleqn' : '';
    code += throwOnError.value ? '\n    throwOnError' : '';
    code += errorColor.value !== "#cc0000" ? '\n    errorColor=' + JSON.stringify(errorColor.value) : '';
    code += minRuleThickness.value > 0 ? '\n    minRuleThickness=' + JSON.stringify(minRuleThickness.value) : '';
    code += colorIsTextColor.value ? '\n    colorIsTextColor' : '';
    code += maxExpand.value !== 1000 ? '\n    maxExpand=' + JSON.stringify(maxExpand.value) : '';
    code += '\n/>';
    return code;
})
</script>

# 在线尝试

---

<el-descriptions direction="vertical" label-width="800px">
<el-descriptions-item label="表达式">
<el-input
    v-model="latexExpression"
    :rows="5"
    type="textarea"
    placeholder="Input LaTeX Expression"
    class="latexExpressionInput"
/>
</el-descriptions-item>
</el-descriptions>

<div class="katex-vue-render-box">
<KatexVue :expression="latexExpression ? latexExpression : '\\KaTeX'" 
:displayMode="displayMode" 
:leqno="leqno" 
:fleqn="fleqn" 
:throwOnColor="throwOnError" 
:errorColor="errorColor" 
:minRuleThickness="minRuleThickness > 0 ? minRuleThickness : undefined" 
:colorIsTextColor="colorIsTextColor" 
:maxExpand="maxExpand"
/>
</div>

<div>
  <el-descriptions title="配置" direction="vertical" label-width="550px" column="2">
    <el-descriptions-item label="行间模式">
      <el-switch
        v-model="displayMode"
        active-text="true"
        inactive-text="false"
      />
    </el-descriptions-item>
    <el-descriptions-item label="左标签模式">
      <el-switch
        v-model="leqno"
        active-text="true"
        inactive-text="false"
      />
    </el-descriptions-item>
    <el-descriptions-item label="公式左对齐">
      <el-switch
        v-model="fleqn"
        active-text="true"
        inactive-text="false"
      />
    </el-descriptions-item>
    <el-descriptions-item label="渲染报错">
      <el-switch
        v-model="throwOnError"
        active-text="true"
        inactive-text="false"
      />
    </el-descriptions-item>
    <el-descriptions-item label="错误文本色">
      <el-color-picker v-model="errorColor"></el-color-picker>
    </el-descriptions-item>
    <el-descriptions-item label="特殊线宽度">
      <el-slider
        v-model="minRuleThickness"
        show-input
        :show-input-controls=false
        :min="0"
        :max="1"
        :step="0.01"
      />
    </el-descriptions-item>
    <el-descriptions-item label="color接收参数">
      <el-switch
        v-model="colorIsTextColor"
        active-text="true"
        inactive-text="false"
      />
    </el-descriptions-item>
    <el-descriptions-item label="宏最大递归栈">
      <el-slider
        v-model="maxExpand"
        show-input
        :show-input-controls=false
        :min="0"
        :max="3000"
      />
    </el-descriptions-item>
  </el-descriptions>
</div>

```vue-vue
{{ code }}
```

<style>
.latexExpressionInput {
    margin: .5rem;
    width: 100%;
    font-size: 1rem;
    resize: none;
    font-family: monospace;
}

.katex-vue-render-box {
    height: 10rem;
    padding: .5rem;
    margin: 2rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 16px;
    overflow: hidden;
}
</style>