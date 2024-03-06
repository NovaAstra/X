import type { ProjectSchema } from '../schemas';

import { ProjectModel } from '../models';

export class ProjectContext {
  private projects: Record<string, ProjectSchema> = {};

  public get() {}

  public async set(project: ProjectSchema): Promise<ProjectSchema> {
  
    const model = new ProjectModel(project);
    const match = this.projects[model.id] || {};
    const schema = Object.assign(model.toSchema(), match);

    this.projects[schema.id!] = schema;

    return schema;
  }
}
