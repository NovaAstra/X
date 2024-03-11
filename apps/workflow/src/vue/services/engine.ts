import type { ProjectSchema } from '../../core/schemas';

import { Context } from '../../core/contexts';
import { ProjectModel } from '../../core/models';

export interface EngineOptions {
  schema?: ProjectSchema;
}

export class Engine {
  public static create() {
    return new Engine();
  }

  public $context: Context = new Context();

  public $project: ProjectModel | null = null;

  public constructor() {
    this.setup({});
  }

  private async setup(project: ProjectSchema) {
    this.$project = new ProjectModel(project);
  }
}
