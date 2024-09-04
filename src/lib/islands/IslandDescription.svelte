<script lang="ts">
  import { sharedIsland } from "$lib/model/shared-state";
</script>

<section class="section">
  {#if sharedIsland.value}
    {@html sharedIsland?.value?.description}
  {:else}{/if}
</section>
