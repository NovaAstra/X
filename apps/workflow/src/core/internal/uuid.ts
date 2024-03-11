import { customAlphabet, urlAlphabet } from 'nanoid';

export type NodeId = string & { length: 16 };

export type ModuleId = string & { length: 16 };

export type ProjectId = string & { length: 36 };

export const createBaseId: (size?: number) => string = customAlphabet(urlAlphabet, 16);

export const createNodeId = () => createBaseId() as NodeId;

export const createModuleId = () => createBaseId() as ModuleId;

export const createProjectId = () => createBaseId(36) as ProjectId;
