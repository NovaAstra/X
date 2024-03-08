import { FileContext } from './file';
import { HistoryContext } from './history';
import { MaterialContext } from './material';
import { ProjectContext } from './project';

export class Context {
  public project: ProjectContext;

  public file: FileContext;

  public history: HistoryContext;

  public material: MaterialContext;

  public constructor(
    project: ProjectContext = new ProjectContext(),
    file: FileContext = new ProjectContext(),
    history: HistoryContext = new HistoryContext(),
    material: MaterialContext = new MaterialContext(),
  ) {
    this.project = project;
    this.file = file;
    this.history = history;
    this.material = material;
  }
}

let context: Context | null = null;

export function createContext(): Context {
  if (context) return context;

  return (context = new Context());
}
