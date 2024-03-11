import { ProjectContext } from './project';

export class Context {
  public $projects: ProjectContext;

  public constructor(projects: ProjectContext = new ProjectContext()) {
    this.$projects = projects;
  }
}
