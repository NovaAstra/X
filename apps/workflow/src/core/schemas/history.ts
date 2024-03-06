import type { BlockSchema } from './block';

export interface HistoryItem {
  id: string;
  label: string;
  schema?: BlockSchema;
}

export interface HistorySchema {
  id: string;
  items?: Record<string, HistoryItem>;
}
