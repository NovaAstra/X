import type { PlainObject } from '@chaos/taper';

import { isPlainObject } from '../isPlainObject';

export function isFullObject(data?: unknown): data is PlainObject {
  return isPlainObject(data) && Object.keys(data).length > 0;
}
