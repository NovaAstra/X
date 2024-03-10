import { ProjectContext } from './project';

export class Context {
  public project: ProjectContext;

  public constructor(project: ProjectContext = new ProjectContext()) {
    this.project = project;
  }
}
