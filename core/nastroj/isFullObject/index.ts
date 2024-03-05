import type { PlainObject } from '@x/taper';

import { isPlainObject } from '../isPlainObject';

export function isFullObject(data?: unknown): data is PlainObject {
  return isPlainObject(data) && Object.keys(data).length > 0;
}
