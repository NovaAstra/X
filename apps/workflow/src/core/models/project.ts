import type { ProjectSchema } from '../schemas';
import type { ModelAttrs, WithId } from '../settings';

import { uuid } from '../settings';

const attrs: ModelAttrs<ProjectSchema, 'id'> = ['title', 'icon'];

export class ProjectModel implements ProjectSchema {
  public static attrs: ModelAttrs<ProjectSchema, 'id'> = attrs;

  public readonly id: string;

  public title?: string;

  public icon?: string;

  public constructor(schema: ProjectSchema) {
    const { id } = schema;

    this.id = id ?? uuid();

    this.update(schema);
  }

  public update(schema: Partial<ProjectSchema>) {
    for (const key of ProjectModel.attrs) {
      const value = schema[key];

      if (value) {
        this[key] = value;
      }
    }
  }

  public toSchema(): WithId<ProjectSchema> {
    const { id } = this;

    const attrs = ProjectModel.attrs.reduce(
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
