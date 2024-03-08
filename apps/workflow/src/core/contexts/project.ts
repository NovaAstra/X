import type { ProjectSchema } from '../schemas';

import { ProjectModel } from '../models';

export class ProjectContext {
  private projects: Map<string, ProjectSchema> = new Map();

  public async get(input: string | ProjectModel): Promise<ProjectSchema> {
    const [_id, schema] = this.has(input);

    return schema || ({} as ProjectSchema);
  }

  public async set(input: ProjectSchema): Promise<ProjectSchema> {
    const model = new ProjectModel(input);
    const schema = model.toSchema();
    this.projects.set(model.id, schema);

    return schema;
  }

  public async update(input: ProjectSchema) {
    const [id, _schema] = this.has(input);

    if (id) {
      const model = new ProjectModel(input);
      const schema = Object.assign(model.toSchema(), _schema);
      this.projects.set(model.id, schema);

      return schema;
    }

    return this.set(input);
  }

  public async delete(input: string | ProjectSchema | ProjectModel): Promise<boolean> {
    const [id] = this.has(input);

    if (id) return this.projects.delete(id);

    return false;
  }

  public async clear(): Promise<boolean> {
    this.projects.clear();

    return true;
  }

  public has(input: string | ProjectSchema | ProjectModel): [string, ProjectSchema] | [] {
    const id = this.getId(input);

    if (!!id && this.projects.has(id)) return [id, this.projects.get(id) || ({} as ProjectSchema)];

    return [];
  }

  private getId(input: string | ProjectSchema | ProjectModel): string | false {
    if (input instanceof ProjectModel) return input.id;

    if (
      typeof input === 'object' &&
      input !== null &&
      Object.prototype.toString.call(input) === '[object Object]'
    )
      return input.id;

    if (typeof input === 'string' && Object.prototype.toString.call(input) === '[object String]')
      return input;

    return false;
  }
}
