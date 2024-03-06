import type { BlockSchema } from './block';

export interface SpaceSchema {
  id: string;
  name: string;
  title: string;
  icon?: string;
  schema?: BlockSchema;
  children?: Record<string, SpaceSchema>;
}
