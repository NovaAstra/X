import type { BlockSchema, NodeSchema } from '../schemas';

import { BaseModel } from './base';
import { NodeModel } from './node';

const attrs: (keyof BlockSchema)[] = ['name'];

export class BlockModel extends BaseModel<BlockSchema> {
  public nodes: WeakMap<NodeSchema, NodeModel> = new WeakMap();

  public static attrs: (keyof BlockSchema)[] = attrs;

  public constructor(schema: BlockSchema) {
    super(schema);
  }

  public update(schema: BlockSchema) {
    const { nodes = {} } = schema;

    for (const id in nodes) {
      this.nodes.set(nodes[id], new NodeModel(nodes[id]));
    }
  }
}
