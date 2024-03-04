export function isTypedArray(data?: unknown): boolean {
  return ArrayBuffer.isView(data) && !(data instanceof DataView);
}
