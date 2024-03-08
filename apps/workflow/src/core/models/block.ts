import type { BlockSchema } from '../schemas';

import { BaseModel } from './base';
import { NodeModel } from './node';

const attrs: (keyof BlockSchema)[] = ['name'];

export class BlockModel extends BaseModel<BlockSchema> {
  public locked: boolean = false;

  public nodes: Map<string, NodeModel> = new Map();

  public static attrs: (keyof BlockSchema)[] = attrs;

  public constructor(schema: BlockSchema) {
    super(schema);
  }

  public update(schema: BlockSchema) {
    const { nodes = {} } = schema;

    for (const id in nodes) {
      this.nodes.set(id, new NodeModel(nodes[id]));
    }
  }

  public lock() {
    this.locked = true;

    this.nodes.forEach(() => {});
  }
}
