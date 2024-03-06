import type { Ref, InjectionKey, ShallowReactive } from 'vue';

import type { Context } from '../contexts';
import type { ProjectSchema } from '../schemas';
import { ProjectModel } from '../models';

import { ref, inject } from 'vue';

import { Provider } from '../hooks/useContext';
import { Event } from './event';
import { Simulator } from './simulator';

export interface EngineOptions {
  context: Context;
  project: ProjectSchema;
}

export const key: InjectionKey<ShallowReactive<Engine>> = Symbol();

export class Engine extends Event {
  public context: Context;

  public provider: Provider;

  public simulator: Simulator;

  public project: Ref<ProjectModel | null> = ref(null);

  public constructor(options: EngineOptions) {
    super();

    const { context, project } = options;

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
    const schema = await this.context.setup(project);

    if (schema) {
      this.project.value = new ProjectModel(schema);
    }
  }
}

export function useEngine() {
  return inject(key, null) as ShallowReactive<Engine>;
}
