import type { BlockSchema } from './block';

export interface BlockFile {
  id: string;
  name: string;
  title: string;
  dsl?: BlockSchema;
}

export interface PageFile extends BlockFile {
  icon?: string;
}
