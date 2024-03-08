import type { ProjectSchema } from '../schemas';

import { uuid } from './uuid';

export function createEmptyProject(): ProjectSchema {
  return {
    id: uuid(),
    name: '未命名项目',
  };
}
