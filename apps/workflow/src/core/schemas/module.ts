import type { NodeSchema } from './node';

export interface ModuleSchema {
  id: string;

  name?: string;

  nodes?: Record<string, NodeSchema>;

  children?: Record<string, ModuleSchema>;
}
