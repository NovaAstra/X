import type { ProjectSchema, SpaceSchema } from '../schemas';

import { useAttrs } from '../hooks';
import { BaseModel } from './base';

const attrs: (keyof ProjectSchema)[] = ['name', 'description', 'spaces'];

export class ProjectModel extends BaseModel<ProjectSchema> {
  public spaces?: Record<string, SpaceSchema>;

  public static attrs: (keyof ProjectSchema)[] = attrs;

  public constructor(schema: ProjectSchema) {
    super(schema);
  }

  public toSchema(): ProjectSchema {
    const { id } = this;
    const attrs = useAttrs.call<
      ProjectModel,
      [(keyof ProjectSchema)[]],
      ReturnType<typeof useAttrs<ProjectSchema, ProjectModel>>
    >(this, ProjectModel.attrs);

    return {
      id,
      ...attrs.get(),
    };
  }
}
