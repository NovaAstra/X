export type EventType = string | symbol;

export type EventCallback<T = unknown> = (event?: T) => boolean | void;

export abstract class Emitter<Events extends Record<EventType, unknown>> {
  public get disabled(): boolean {
    return this._disabled;
  }

  protected _disabled: boolean = false;

  protected _events: Map<keyof Events, EventCallback<Events[keyof Events]>> = new Map();

  public on<Key extends keyof Events>(
    event: Key,
    callback: EventCallback<Events[keyof Events]>
  ): void {
    this._events.set(event, callback);
  }

  public off<Key extends keyof Events>(event: Key): void {
    if (this._events.has(event)) {
      this._events.delete(event);
    }
  }

  public emit<Key extends keyof Events>(event: Key, args?: Events[keyof Events]): boolean | void {
    if (!this.disabled && this._events.has(event)) {
      const callback = this._events.get(event)!;

      return callback(args);
    }
  }

  public enable(): void {
    this._disabled = true;
  }

  public disable(): void {
    this._disabled = false;
  }

  public destroy() {
    this._events.clear();
  }
}
