export function isNil(data?: unknown): data is null | undefined {
  return data === null || data === undefined;
}