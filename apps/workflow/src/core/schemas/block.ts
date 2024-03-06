import { NodeSchema } from './node';

export interface BlockSchema {
  id?: string;
  name: string;
  nodes?: Record<string, NodeSchema>;
}
