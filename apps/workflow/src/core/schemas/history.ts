import type { ScopeSchema } from './scope';

export interface HistoryItem {
  id: string;
  label: string;
  schema?: ScopeSchema;
}

export interface HistorySchema {
  id: string;
  items?: Record<string, HistoryItem>;
}
