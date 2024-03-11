import type { ProjectId } from '../internal';
import type { ModuleSchema } from './module';

export interface ProjectSchema {
  id?: ProjectId;

  name?: string;

  description?: string;

  modules?: Record<string, ModuleSchema>;
}
