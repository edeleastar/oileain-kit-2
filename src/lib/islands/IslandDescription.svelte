<script lang="ts">
  import type { Island } from "../model/oileain-types";
  import { sharedIsland } from "$lib/model/rune.svelte";
</script>

<section class="section">
  {#if sharedIsland.value}
    {@html sharedIsland?.value?.description}
  {:else}{/if}
</section>
