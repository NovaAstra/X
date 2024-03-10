import type { ScopeSchema } from './scope';

export interface ModuleScheam {
  id: string;

  name: string;

  description?: string;

  icon?: string;

  hidden?: boolean;

  schema: Record<string, ScopeSchema>;
}
