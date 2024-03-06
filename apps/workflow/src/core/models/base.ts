import { uuid } from '../utilties';

export type WithId<Schema> = Schema & { id?: string };

export class BaseModel<Schema> {
  public readonly id: string;

  public name!: string;

  public description?: string;

  protected $schema: Schema;

  public constructor(schema: Schema) {
    this.$schema = schema;

    const { id } = schema as WithId<Schema>;

    this.id = id ?? uuid();
  }
}
