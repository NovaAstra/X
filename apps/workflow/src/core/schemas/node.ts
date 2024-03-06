export interface NodeSourceUrlSchema {
  type: '$url';
  url: string;
}

export interface NodeSourceRemoteSchema {
  type: '$remote';
  url: string;
}

export type NodeSource = string | NodeSourceUrlSchema | NodeSourceRemoteSchema;

export interface NodeSchema {
  id: string;
  name: string;
  source?: NodeSource;
}
