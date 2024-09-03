<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import IslandCoordinates from "$lib/islands/IslandCoordinates.svelte";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import IslandMap from "$lib/maps/IslandMap.svelte";
</script>

<div class="columns">
  <div class="column">
    <IslandMap zoom={12} height={40} />
    <IslandCoordinates island={data.island} />
  </div>
  <div class="column">
    <IslandDescription />
  </div>
</div>
