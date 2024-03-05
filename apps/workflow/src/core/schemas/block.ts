import { NodeSchema } from './node';

export interface BlockSchema {
  id?: string;
  name: string;
  locked?: string;
  nodes?: Record<string, NodeSchema>;
}
