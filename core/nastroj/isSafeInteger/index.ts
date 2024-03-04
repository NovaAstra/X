export function isSafeInteger(data?: any): data is number {
  return Number.isSafeInteger(data);
}
