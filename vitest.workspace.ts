import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: {
      globals: true,
      include: ['**/*.{test,spec}.{ts,tsx}'],
      environment: 'happy-dom',
    },
  },
]);
