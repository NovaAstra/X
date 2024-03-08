import type { NodeSchema } from './node';

export interface BlockSchema {
  id: string;
  name: string;
  locked?: boolean;
  nodes?: Record<string, NodeSchema>;
}
