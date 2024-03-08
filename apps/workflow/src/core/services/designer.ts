import type { Engine } from './engine';
import type { NodeModel } from '../models';

export interface DesignerOptions {
  engine: Engine;
}

export class Designer {
  public engine: Engine;

  public selected: NodeModel | null = null;

  public constructor(options: DesignerOptions) {
    const { engine } = options;

    this.engine = engine;
  }

  protected select(node: NodeModel) {
    this.selected = node;
  }
}
