import type { GlobalVue } from './global';
import type { BlockSchema } from '../core';

import * as Vue from 'vue';
import { VueFlow } from '@vue-flow/core';

import { Context } from './context';

export interface BlockOptions {
  vue?: GlobalVue;
  schema?: BlockSchema;
}

export class Block {
  public static $name: 'Block' = 'Block';

  protected readonly $vue: GlobalVue;

  protected $context: Context = new Context();

  protected $schema: BlockSchema;

  public constructor(options: BlockOptions = {}) {
    const { vue = Vue, schema } = options;

    this.$vue = vue;
    this.$schema = schema ?? ({} as BlockSchema);
  }

  public render() {
    const { $vue, $schema } = this;

    const root = $vue.defineComponent({
      name: $schema.name ?? Block.$name,
      setup() {
        return () => $vue.createVNode(VueFlow);
      },
    });

    return $vue.markRaw(root);
  }
}
