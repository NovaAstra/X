<script lang="tsx">
import { defineComponent } from "vue";

import { Block } from './vue'

export default defineComponent({
  name: 'App',
  setup() {
    const Root = new Block().render()

    return () => <Root />
  }
})
</script>

