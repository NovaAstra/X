import type { ProjectSchema } from '../schemas';

import { uuid } from '../utilties';

export class ProjectModel implements ProjectSchema {
  public id: string = uuid();

  public static attrs: string[] = ['name', 'description', 'pages'];

  public constructor(schema: ProjectSchema) {
    const { id } = schema;

    this.id = id ?? uuid();

    this.update(schema);
  }

  public update(schema: Partial<ProjectSchema>) {
    for (const key of ProjectModel.attrs) {
      const value = schema[key as keyof ProjectSchema];
      if (value) {
      }
    }
  }

  public toDsl():ProjectSchema {
    return {} as any
  }
}
