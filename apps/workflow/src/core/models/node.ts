import type { NodeSchema } from '../schemas';

import { uuid } from '../utilties';

export class NodeModel {
  public static create(schema: NodeSchema) {
    return new NodeModel(schema);
  }

  public static nodes: Map<string, NodeModel> = new Map();

  public readonly id: string;

  public readonly name: string;

  public locked: boolean = false;

  public hidden: boolean = false;

  public constructor(schema: NodeSchema) {
    const { id = uuid(), name } = schema;

    this.id = id;
    this.name = name;
  }

  public update(schema: Partial<NodeSchema>) {
    const { locked = false, hidden = false } = schema;

    this.locked = locked;
    this.hidden = hidden;
  }
}

export function createNode(schema: NodeSchema) {
  return NodeModel.create(schema);
}
