import type { PageFile } from './file';

export interface ProjectSchema {
  id: string;
  name?: string;
  description?: string;
  pages?: PageFile[];

  __VERSION__?: string;
}
