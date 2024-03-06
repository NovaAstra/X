import type { BaseModel } from '../models';

export function useAttrs<Schema extends object, Model extends BaseModel<Schema>>(
  this: Model & BaseModel<Schema>,
  attrs: (keyof Schema)[]
) {
  const get = (): Pick<Schema, (typeof attrs)[number]> =>
    attrs.reduce(
      (result, current) => ({
        ...result,
        [current]: this[current as keyof Model & keyof BaseModel<Schema>],
      }),
      {} as Pick<Schema, (typeof attrs)[number]>
    );

  return {
    get,
  };
}
