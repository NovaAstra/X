import type { ProjectSchema } from '../schemas';

import { ProjectModel } from '../models';

class ProjectCenter {
  public constructor() {}
}

class ElementCenter {
  public constructor() {}
}

class HistoryCenter {
  public constructor() {}
}

export class MemoryService {
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

let serviceInstance: MemoryService | null = null;

export function createMemoryService(): MemoryService {
  if (serviceInstance) return serviceInstance;

  return (serviceInstance = new MemoryService(
    new ProjectCenter(),
    new ElementCenter(),
    new HistoryCenter()
  ));
}
