import type { InjectionKey } from 'vue';

import type { Context } from '../contexts';
import type { ProjectSchema } from '../schemas';

import { inject } from 'vue';

import { ContextModeEnum } from '../enums';

export interface ProviderOptions {
  context: Context;
  project?: ProjectSchema;
  mode?: ContextModeEnum;
}

const key: InjectionKey<Provider> = Symbol('Provider');

export class Provider {
  public context: Context;

  public mode: ContextModeEnum;

  public project: ProjectSchema | null = null;

  public constructor(options: ProviderOptions) {
    const { context, mode = ContextModeEnum.RUNTIME, project = {} } = options;

    this.context = context;
    this.mode = mode;

    this.setup(project as ProjectSchema);
  }

  public async setup(project: ProjectSchema) {
    this.project = await this.context.setup(project);
  }
}

export function useContext(): Provider {
  return inject(key) as Provider;
}
