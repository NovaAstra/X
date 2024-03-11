export type WithId<Schema> = Schema & { id: string };

export type PropType =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Array'
  | 'Object'
  | 'Function'
  | 'Date'
  | 'Symbol';

export type JSONValue = boolean | string | number | null | undefined | JSONArray | JSONObject;

export type JSONArray = JSONValue[];

export interface JSONObject {
  [key: string]: JSONValue;
}

export interface JSExpression {
  type: '$EXPRESSION';
  value: string;
}

export interface Prop {
  type: PropType | PropType[];
  required?: boolean;
  default?: JSONValue | JSExpression;
}

export type Props = Record<string, Prop>;

export interface BaseSchema {
  id?: string;
}
