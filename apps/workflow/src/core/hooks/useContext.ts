import type { InjectionKey } from 'vue';

import type { Context } from '../contexts';
import type { ProjectSchema } from '../schemas';

import { inject } from 'vue';

export interface ProviderOptions {
  context: Context;
  project?: ProjectSchema;
}

const key: InjectionKey<Provider> = Symbol();

export class Provider {
  public context: Context;

  public project: ProjectSchema | null = null;

  public constructor(options: ProviderOptions) {
    const { context, project = {} } = options;

    this.context = context;

    this.setup(project as ProjectSchema);
  }

  public async setup(project: ProjectSchema) {
    this.project = await this.context.setup(project);
  }
}

export function useContext(): Provider {
  return inject(key) as Provider;
}
