export type WithId<T> = Omit<T, 'id'> & { id: string };

export type ModelAttrs<T, K extends string> = (keyof Omit<T, K>)[];
