import type { ProjectSchema } from '../schemas';

import { ProjectModel } from '../models';

class ProjectCenter {
  private projects: Map<string, ProjectSchema> = new Map();

  public async set(project: ProjectSchema): Promise<ProjectSchema> {
    const model: ProjectModel = new ProjectModel(project);
    const schema = model.toDsl();
    this.projects.set(model.id, schema);
    return schema;
  }

  public async get(id: string): Promise<ProjectSchema> {
    return this.projects.get(id) as ProjectSchema;
  }
}

class SpaceCenter {
  private spaces = new Map();

  public async set(){}

  public async get(){}

  public async delete(){}
}

class ElementCenter {
  private elements = new Map();
}

class HistoryCenter {
  public constructor() {}
}

export class Center {
  public projects: ProjectCenter;
  public elements: ElementCenter;
  public histories: HistoryCenter;

  public constructor(
    projectCenter: ProjectCenter,
    elementCenter: ElementCenter,
    historyCenter: HistoryCenter
  ) {
    this.projects = projectCenter;
    this.elements = elementCenter;
    this.histories = historyCenter;
  }
}

let serviceInstance: Center | null = null;

export function createMemoryService(): Center {
  if (serviceInstance) return serviceInstance;

  return (serviceInstance = new Center(
    new ProjectCenter(),
    new ElementCenter(),
    new HistoryCenter()
  ));
}
