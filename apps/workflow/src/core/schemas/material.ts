import type { NodeSource } from './node';

export interface MaterialSchema {
  name: string;
  alias?: string;
  icon?: string;
  label?: string;
  doc?: string;
  category?: string;
  hidden?: boolean;
  source?: NodeSource;
  id?: string;
}
