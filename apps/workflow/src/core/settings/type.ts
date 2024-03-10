export type WithId<T> = Omit<T, 'id'> & { id: string };

export type ModelAttrs<T, K extends string> = (keyof Omit<T, K>)[];

export type JSONKey = string;

export type JSONValue = boolean | string | number | null | undefined | JSONArray | JSONObject;

export type JSONArray = JSONValue[];

export interface JSONObject {
  [key: string]: JSONValue;
}
