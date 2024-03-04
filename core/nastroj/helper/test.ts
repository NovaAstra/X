export function toArgs(args) {
  return function () {
    return arguments;
  }.apply(undefined, args);
}

export const primitive = ['', 1, 2n, false, undefined, null, Symbol('a')];

export const falsey = [, NaN, ...primitive];

export const args = toArgs([1, 2, 3]);

export const stubFalse = () => false;
export const stubTrue = () => true;

const array = Array.prototype;

export const slice = array.slice;

export const uint8Array = Uint8Array ? new Uint8Array() : undefined;
export const arrayBuffer = ArrayBuffer ? new ArrayBuffer(2) : undefined;
export const map = Map ? new Map() : undefined;
