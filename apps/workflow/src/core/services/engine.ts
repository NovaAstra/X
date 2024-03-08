import type { Ref, InjectionKey, ShallowReactive } from 'vue';

import type { ProjectSchema } from '../schemas';

import { ref, inject } from 'vue';

import { Provider } from '../hooks/useContext';
import { Simulator } from './simulator';
import { ProjectModel } from '../models';
import { Context } from '../contexts';
import { createEmptyProject } from '../utilties';

export interface EngineOptions {
  context: Context;
  project?: ProjectSchema;
}

export const key: InjectionKey<ShallowReactive<Engine>> = Symbol('Engine');

export class Engine {
  public context: Context;

  public provider: Provider;

  public simulator: Simulator;

  public project: Ref<ProjectModel | null> = ref(null);

  public constructor(options: EngineOptions) {
    const { context = new Context(), project = createEmptyProject() } = options;

    this.context = context;
    this.provider = new Provider({
      context,
      project,
    });
    this.simulator = new Simulator({
      engine: this,
    });

    this.setup(project);
  }

  private async setup(project: ProjectSchema) {
    const schema = await this.context.project.update(project);

    if (schema) {
      this.project.value = new ProjectModel(schema);
    }
  }
}

export function useEngine() {
  return inject(key) as ShallowReactive<Engine>;
}
