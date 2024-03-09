import type { ScopeSchema } from './scope';

export interface ModuleSchema {
  id: string;
  name: string;
  title: string;
  icon?: string;
  schema?: ScopeSchema;
  children?: Record<string, ScopeSchema>;
}
