import type { SpaceSchema } from './space';

export interface ProjectSchema {
  id?: string;
  name: string;
  description?: string;
  spaces?: Record<string, SpaceSchema>;
}
