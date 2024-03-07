import type { NodeSchema } from '../schemas';

import { BaseModel } from './base';

export class NodeModel extends BaseModel<NodeSchema> {
  public static nodes: WeakMap<NodeSchema, NodeModel> = new WeakMap();

  public constructor(schema: NodeSchema) {
    super(schema);

    NodeModel.nodes.set(schema, this);
  }

  public update() {}
}
