import type { Designer } from './designer';
import type { Engine } from './engine';

export interface SimulatorOptions {
  engine: Engine;
}

export class Simulator {
  public engine: Engine;

  public constructor(options: SimulatorOptions) {
    const { engine } = options;

    this.engine = engine;
  }

  public bootstrap(){}

  public setup() {}
}
