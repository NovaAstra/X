import type { ProjectSchema } from '../schemas';
import type { WithId } from '../settings';

import { ProjectModel, ScopeModel } from '../models';
import { Emitter } from './emitter';
import { Context } from '../contexts';
import { Provider } from './provider';
import { Simulator } from './simulator';

export type Events = {};

export interface EngineOptions {
  context?: Context;
  project?: ProjectSchema;
}

export class Engine extends Emitter<Events> {
  public context: Context;

  public provider: Provider;

  public simulator: Simulator;

  public project: ProjectModel | null = null;

  public scope: ScopeModel | null = null;

  public constructor(options: EngineOptions = {}) {
    super();

    const { context = new Context(), project } = options;

    this.context = context;

    this.provider = new Provider({ context, project });
    this.simulator = new Simulator({ engine: this });

    this.setup(project as ProjectSchema);
  }

  public async setup(project: ProjectSchema) {
    const schema = await this.context.project.update(project as WithId<ProjectSchema>);

    if (schema) {
      this.project = new ProjectModel(schema);
    }
  }
}
