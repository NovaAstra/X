import type { Engine } from './engine';

export class Designer {
  public engine: Engine;

  public document: Document | null = null;

  public constructor(engine: Engine) {
    this.engine = engine;
  }

  public async onDrop() {}
}
