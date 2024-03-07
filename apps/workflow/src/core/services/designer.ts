import type { Engine } from './engine';
import type { NodeModel } from '../models';

export class Designer {
  public engine: Engine;

  public dropping: NodeModel | null = null;

  public selected: NodeModel | null = null;

  public constructor(engine: Engine) {
    this.engine = engine;
  }

  public async drag() {}

  public async dragend() {}

  public async dragenter() {}

  public async dragleave() {}

  public async dragover(node: NodeModel) {
    this.dropping = node;
  }

  public async dragstart() {}

  public async drop() {}

  public async mouseover() {}

  public async mouseleave() {}

  public async scroll() {}

  public async select(node: NodeModel) {
    this.selected = node;
  }

  public createNodeDSL() {}
}
