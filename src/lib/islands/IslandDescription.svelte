<script lang="ts">
  import type { Island } from "../model/oileain-types";
  import { sharedIsland } from "$lib/model/shared-state";
</script>

<section class="section">
  {#if sharedIsland.value}
    {@html sharedIsland?.value?.description}
  {:else}{/if}
</section>
