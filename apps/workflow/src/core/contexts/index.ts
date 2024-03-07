import type { ProjectSchema } from '../schemas';

import { ProjectContext } from './project';

export class Context {
  private project: ProjectContext;

  public constructor(project: ProjectContext = new ProjectContext()) {
    this.project = project;
  }

  public async setup(schema: ProjectSchema): Promise<ProjectSchema> {
    return this.project.set(schema);
  }
}

let context: Context | null = null;

export function createContext(): Context {
  if (context) return context;

  return (context = new Context());
}
