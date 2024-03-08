import type { NodeSchema } from '../schemas';

import { BaseModel } from './base';

export class NodeModel extends BaseModel<NodeSchema> {
  public locked: boolean = false;

  public hidden: boolean = false;

  public static nodes: Map<string, NodeModel> = new Map();

  public constructor(schema: NodeSchema) {
    super(schema);

    NodeModel.nodes.set(this.id, this);
  }

  public toSchema() {
    const { id, locked, hidden } = this;

    return {
      id,
      locked,
      hidden,
    };
  }

  public lock() {
    this.locked = true;
  }

  public unlock() {
    this.locked = false;
  }

  public setVisible(visible: boolean) {
    this.hidden = !visible;
  }
}
