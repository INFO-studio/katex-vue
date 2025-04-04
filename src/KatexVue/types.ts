import {KatexOptions} from "katex";

export interface KatexVueProps extends Partial<KatexOptions> {
    expression: string
}