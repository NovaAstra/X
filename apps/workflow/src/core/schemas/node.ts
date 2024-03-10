import type { JSONValue } from '../settings';

export interface NodeProps {}

export interface NodeSchema {
  id?: string;

  name: string;

  hidden?: boolean;
}
