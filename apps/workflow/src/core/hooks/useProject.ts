import { computed } from 'vue';

import { useEngine } from '../services';

export function useProject() {
  const engine = useEngine();

  const project = computed(() => engine.project.value);

  return {
    engine,
    project,
  };
}
