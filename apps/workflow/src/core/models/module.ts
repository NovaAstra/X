import type { ModuleSchema } from '../schemas';

import { BaseModel } from './base';

export class ModuleModel extends BaseModel<ModuleSchema> {
  public constructor(schema: ModuleSchema) {
    super(schema);
  }
}
