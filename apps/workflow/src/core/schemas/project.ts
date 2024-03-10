import type { ModuleScheam } from './module';

export interface ProjectSchema {
  id?: string;

  name: string;

  description?: string;

  icon?: string;

  modules?: Record<string, ModuleScheam>;
}
