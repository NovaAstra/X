import type { HistorySchema, HistoryItem } from '../schemas';

export class HistoryModel {
  public id: string;
  public items: Record<string, HistoryItem>;

  public constructor(schema: HistorySchema) {
    const { id, items = {} } = schema;

    this.id = id;
    this.items = items;
  }
}
