export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Number = number | bigint;

export type NumberLike<T extends number = number> = T | `${T}`;

export type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never;
