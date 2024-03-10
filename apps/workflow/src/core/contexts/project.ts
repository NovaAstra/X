import type { ProjectSchema } from '../schemas';
import type {WithId} from '../settings'

import { isPlainObject, isString } from 'lodash-es';

import { ProjectModel } from '../models';

type Input = string | WithId<ProjectSchema>;

export class ProjectContext {
  private inputs: Map<string, WithId<ProjectSchema>>;

  public constructor(inputs: Map<string, WithId<ProjectSchema>> = new Map()) {
    this.inputs = inputs;
  }

  public async get(input: Input): Promise<WithId<ProjectSchema>> {
    const [_id, schema] = await this.has(input);

    return schema as WithId<ProjectSchema>;
  }

  public async set(input: WithId<ProjectSchema> ): Promise<void> {
    this.inputs.set(input.id, input);
  }

  public async update(input: WithId<ProjectSchema>): Promise<WithId<ProjectSchema>> {
    const model = new ProjectModel(input);

    const match = await this.get(input);
    const schema = Object.assign(model.toSchema(), match ?? ({} as WithId<ProjectSchema>));
    await this.set(schema);

    return schema as WithId<ProjectSchema>;
  }

  public async delete(input: Input): Promise<void> {
    const [id] = await this.has(input);

    if (id) this.inputs.delete(id);
  }

  public async clear(): Promise<void> {
    this.inputs.clear();
  }

  public async has(input: Input): Promise<[string, WithId<ProjectSchema>] | []> {
    if (isString(input)) return this.inputs.has(input) ? [input, this.inputs.get(input)!] : [];

    if (isPlainObject(input))
      return this.inputs.has(input.id) ? [input.id, this.inputs.get(input.id)!] : [];

    return [];
  }
}
