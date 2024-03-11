import type { ProjectId } from '../internal';
import type { ProjectSchema } from '../schemas';

import { createProjectId } from '../internal';
import { BaseModel } from './base';

export class ProjectModel extends BaseModel<ProjectSchema> {
  public id: ProjectId;

  public constructor(schema: ProjectSchema) {
    super(schema);

    const { id } = schema;

    this.id = id ?? createProjectId();
  }

}
