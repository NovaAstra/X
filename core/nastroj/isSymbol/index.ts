import { is } from '../is';

export function isSymbol(data?: unknown): data is Symbol {
  return is(Symbol, data);
}
