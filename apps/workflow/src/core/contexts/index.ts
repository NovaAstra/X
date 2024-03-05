export class Context {}

let context: Context | null = null;

export function createContext() {
  if (context) return context;

  return (context = new Context());
}
