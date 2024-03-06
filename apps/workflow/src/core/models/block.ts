import type { BlockSchema } from '../schemas';

import { BaseModel } from './base';

export const attrs: (keyof BlockSchema)[] = ['name'];

export class BlockModel extends BaseModel<BlockSchema> {
  public static attrs: (keyof BlockSchema)[] = attrs;

  public constructor(schema: BlockSchema) {
    super(schema);
  }

  public update(schema: BlockSchema) {}
}
