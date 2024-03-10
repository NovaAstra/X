import type { ScopeSchema } from '../schemas';
import type { ModelAttrs, WithId } from '../settings';

import { uuid } from '../settings';

const attrs: ModelAttrs<ScopeSchema, 'id'> = ['title'];

export class ScopeModel {
  public static attrs: ModelAttrs<ScopeSchema, 'id'> = attrs;

  public readonly id: string;

  public title?: string;

  public constructor(schema: ScopeSchema) {
    const { id } = schema;

    this.id = id ?? uuid();

    this.update(schema);
  }

  public update(schema: Partial<ScopeSchema>) {
    for (const key of ScopeModel.attrs) {
      const value = schema[key];

      if (value) {
        this[key] = value;
      }
    }
  }

  public toSchema(): WithId<ScopeSchema> {
    const { id } = this;

    const attrs = ScopeModel.attrs.reduce(
      (result, current) => ({
        ...result,
        [current]: this[current],
      }),
      {}
    );

    return {
      id,
      ...attrs,
    };
  }
}
