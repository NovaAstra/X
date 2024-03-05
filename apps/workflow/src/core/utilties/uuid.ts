import { customAlphabet, urlAlphabet } from 'nanoid';

export const uuid = customAlphabet(urlAlphabet, 8);