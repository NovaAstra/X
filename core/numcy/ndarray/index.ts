export type Shape = number[];

export type ShapeLike = Shape | number;

export enum DTypeEnum {
  GENERIC = 'generic',
  BINARY = 'binary',
}

export enum OrderEnum {
  C = 'C',
  F = 'F',
}

export class NDArray {}

export function ndarray(options: {
  shape: ShapeLike;
  dtype?: DTypeEnum;
  offset?: Number;
  strides?: ShapeLike;
  order?: OrderEnum;
}) {
  if (arguments.length === 0) {
  }
}
