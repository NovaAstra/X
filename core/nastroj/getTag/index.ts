export function getTag(data?: unknown): `[object ${string}]` {
  return Object.prototype.toString.call(data);
}
