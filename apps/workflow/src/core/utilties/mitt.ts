import mitt from 'mitt';

import { UPDATE_PROJECT } from './constants';

export type Events = {
  [UPDATE_PROJECT]: any;
};

export const emitter = mitt<Events>();
