import { isString } from '../isString';
import { isNumber } from '../isNumber';
import { isBigint } from '../isBigint';
import { isBoolean } from '../isBoolean';
import { isUndefined } from '../isUndefined';
import { isSymbol } from '../isSymbol';
import { isNull } from '../isNull';

export function isPrimitive(
  data?: unknown
): data is string | number | bigint | boolean | undefined | symbol | null {
  return (
    isString(data) ||
    isNumber(data) ||
    isBigint(data) ||
    isBoolean(data) ||
    isUndefined(data) ||
    isSymbol(data) ||
    isNull(data)
  );
}
