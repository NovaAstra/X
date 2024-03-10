import type { Engine } from './engine';

export interface SimulatorOptions {
  engine: Engine;
}

export class Simulator {
  public engine: Engine;

  public constructor(options: Simulator) {
    const { engine } = options;

    this.engine = engine;
  }
}
