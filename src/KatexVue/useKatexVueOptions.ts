import {KatexOptions} from "katex";
import {inject} from "vue";

export const useKatexVueOptions = () => {
    const globalConfig = inject("katex-vue-config", {}) as KatexOptions

    const defaultOptions: KatexOptions = {
        displayMode: false,
        output: 'htmlAndMathml',
        leqno: false,
        fleqn: false,
        throwOnError: false,
        errorColor: '#cc0000',
        macros: undefined,
        minRuleThickness: undefined,
        colorIsTextColor: false,
        maxSize: Infinity,
        maxExpand: 1000,
        strict: 'warn',
        trust: false,
        globalGroup: false
    }

    const getMixedOptions = () => {
        const displayMode = globalConfig.displayMode ?? defaultOptions.displayMode;
        const output = globalConfig.output ?? defaultOptions.output;
        const leqno = globalConfig.leqno ?? defaultOptions.leqno;
        const fleqn = globalConfig.fleqn ?? defaultOptions.fleqn;
        const throwOnError = globalConfig.throwOnError ?? defaultOptions.throwOnError;
        const errorColor = globalConfig.errorColor ?? defaultOptions.errorColor;
        const macros = globalConfig.macros ?? defaultOptions.macros;
        const minRuleThickness = globalConfig.minRuleThickness ?? defaultOptions.minRuleThickness;
        const colorIsTextColor = globalConfig.colorIsTextColor ?? defaultOptions.colorIsTextColor;
        const maxSize = globalConfig.maxSize ?? defaultOptions.maxSize;
        const maxExpand = globalConfig.maxExpand ?? defaultOptions.maxExpand;
        const strict = globalConfig.strict ?? defaultOptions.strict;
        const trust = globalConfig.trust ?? defaultOptions.trust;
        const globalGroup = globalConfig.globalGroup ?? defaultOptions.globalGroup;

        return {
            displayMode,
            output,
            leqno,
            fleqn,
            throwOnError,
            errorColor,
            macros,
            minRuleThickness,
            colorIsTextColor,
            maxSize,
            maxExpand,
            strict,
            trust,
            globalGroup,
        } as KatexOptions
    }

    const getComponentOptions = (componentProps: KatexOptions) => {
        const mixedOptions = getMixedOptions();

        return {
            displayMode: componentProps.displayMode ?? mixedOptions.displayMode,
            output: componentProps.output ?? defaultOptions.output,
            leqno: componentProps.leqno ?? defaultOptions.leqno,
            fleqn: componentProps.fleqn ?? defaultOptions.fleqn,
            throwOnError: componentProps.throwOnError ?? defaultOptions.throwOnError,
            errorColor: componentProps.errorColor ?? defaultOptions.errorColor,
            macros: componentProps.macros ?? defaultOptions.macros,
            minRuleThickness: componentProps.minRuleThickness ?? defaultOptions.minRuleThickness,
            colorIsTextColor: componentProps.colorIsTextColor ?? defaultOptions.colorIsTextColor,
            maxSize: componentProps.maxSize ?? defaultOptions.maxSize,
            maxExpand: componentProps.maxExpand ?? defaultOptions.maxExpand,
            strict: componentProps.strict ?? defaultOptions.strict,
            trust: componentProps.trust ?? defaultOptions.trust,
            globalGroup: componentProps.globalGroup ?? defaultOptions.globalGroup,
        } as KatexOptions
    }

    return {getMixedOptions, getComponentOptions}
}