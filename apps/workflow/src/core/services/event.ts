import type { Emitter } from 'mitt';

import type { Events } from '../utilties';

import { emitter, UPDATE_PROJECT } from '../utilties';

export abstract class Event {
  public emitter: Emitter<Events> = emitter;

  public constructor() {
    emitter.on(UPDATE_PROJECT, () => {});
  }
}
