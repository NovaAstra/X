import type { HistorySchema } from '../schemas';

import { HistoryModel } from '../models';

export class HistoryContext<Schema extends HistorySchema = HistorySchema> {
  private data: Map<string, Schema> = new Map();

  public async get(id: string) {
    const schema = this.data.get(id);
    const history = new HistoryModel(schema || { id });

    return history;
  }

  public async set(schema: Schema): Promise<void> {
    this.data.set(schema.id, schema);
  }

  public async delete(id: string): Promise<void> {
    if (this.data.has(id)) {
      const schema = this.data.get(id) as Schema;

      this.data.delete(id);
    }
  }
}
