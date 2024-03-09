import type { SpaceSchema } from './module';

export interface ProjectSchema {
  id: string;
  name: string;
  description?: string;
  spaces?: Record<string, SpaceSchema>;
}

