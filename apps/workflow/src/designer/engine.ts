import type { Ref } from 'vue';

import type { Context } from '../core/contexts';
import type { ProjectSchema } from '../core/schemas';
import type { ProjectModel } from '../core/models';

import { ref } from 'vue';

export interface EngineOptions {
  context: Context;
  project: ProjectSchema;
}

export class Engine {
  public context: Context;

  public project: Ref<ProjectModel | null> = ref(null);

  public constructor(options: EngineOptions) {
    const { context } = options;

    this.context = context;
  }
}
