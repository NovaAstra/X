import type { BaseSchema } from '../schemas';

export abstract class BaseModel<Schema extends BaseSchema> {
  public readonly $schema: Schema;

  public constructor(schema: Schema) {
    this.$schema = schema;
  }
}
