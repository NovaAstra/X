import type { GlobalVue } from './global';
import type { NodeSchema } from '../core';
import type { Context } from './context';

import * as Vue from 'vue';

export interface NodeOptions {
  vue?: GlobalVue;
  schema?: NodeSchema;
  context: Context;
}

export class Node {
  public static $name: 'Node' = 'Node';

  public static create() {}

  protected readonly $vue: GlobalVue;

  protected $schema: NodeSchema;

  protected $context: Context;

  public constructor(options: NodeOptions) {
    const { vue = Vue, schema, context } = options;

    this.$vue = vue;
    this.$schema = schema ?? ({} as NodeSchema);
    this.$context = context;
  }

  public render() {
    const { $vue } = this;

    return $vue.createVNode('div');
  }
}
