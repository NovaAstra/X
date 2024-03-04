export function isObject<T extends object>(data?: unknown): data is T {
  const type = typeof data;
  return data != null && (type === 'object' || type === 'function');
}