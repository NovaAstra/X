import type { Context } from '../contexts';
import type { ProjectSchema } from '../schemas';
import type { WithId } from '../settings';

export interface ProviderOptions {
  context: Context;
  project?: ProjectSchema;
}

export class Provider {
  public context: Context;

  public project: ProjectSchema | null = null;

  public constructor(options: ProviderOptions) {
    const { context, project } = options;

    this.context = context;

    this.setup(project as ProjectSchema);
  }

  public async setup(project: ProjectSchema) {
    this.project = await this.context.project.update(project as WithId<ProjectSchema>);
  }
}
