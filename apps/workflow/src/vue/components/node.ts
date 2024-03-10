import type { NodeSchema } from '../../core';

import { createVNode } from 'vue';

export class Node {
  public static create(schema: NodeSchema) {
    if (!schema || !schema.name || schema.hidden) return null;

    const node = new Node(schema);

    return node.render();
  }

  public readonly $schema: NodeSchema;

  public readonly $id: string;

  public readonly $name: string;

  public constructor(schema: NodeSchema) {
    this.$schema = schema;

    const { id, name } = schema;

    this.$id = id;
    this.$name = name;
  }

  public render() {
    const name = this.$name;

    return createVNode('div')
  }
}

export const XNode = Node.create({ id: 'asdn', name: 'Test' });
