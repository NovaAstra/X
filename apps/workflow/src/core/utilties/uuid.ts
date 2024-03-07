import { customAlphabet, urlAlphabet } from 'nanoid';

export const uuid: (size?: number) => string = customAlphabet(urlAlphabet, 8);
