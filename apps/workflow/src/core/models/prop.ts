import type { JSONValue } from '../settings';
import type { NodeProps } from '../schemas';

export class PropModel {
  public key: string;

  public value?: JSONValue;

  public defaultValue?: JSONValue;

  public constructor(key: string, value?: JSONValue, defaultValue?: JSONValue) {
    this.key = key;
    this.defaultValue = defaultValue;

    this.set(value);
  }

  public set(value?: JSONValue): void {
    this.value = value;
  }

  public get(): JSONValue {
    return this.value ?? (this.defaultValue as JSONValue);
  }

  public static dsl(props: Record<string, PropModel> = {}): NodeProps {
    return Object.entries(props).reduce(
      (result, [key, prop]) => ({
        ...result,
        [key]: prop.get(),
      }),
      {} as NodeProps
    );
  }

  public static parse(props: NodeProps = {}) {
    return Object.entries(props).reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: new PropModel(key, value),
      }),
      {} as Record<string, PropModel>
    );
  }
}
