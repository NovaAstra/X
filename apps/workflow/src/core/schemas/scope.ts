import type { NodeSchema } from './node';

export interface ScopeSchema {
  id: string;
  name: string;
  locked?: boolean;
  nodes?: Record<string, NodeSchema>;
}
