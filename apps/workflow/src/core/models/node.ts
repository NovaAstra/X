import type { NodeSchema } from '../schemas';

import { BaseModel } from './base';

export class NodeModel extends BaseModel<NodeSchema> {
  public constructor(schema: NodeSchema) {
    super(schema);
  }
}
