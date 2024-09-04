<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  export let data: PageData;
  import IslandCoordinates from "$lib/islands/IslandCoordinates.svelte";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import IslandMap from "$lib/maps/IslandMap.svelte";
  import { sharedIsland, sharedMarker } from "$lib/model/shared-state";

  page.subscribe((path) => {
    sharedMarker.value = data.marker;
    sharedIsland.value = data.island;
  });

  onMount(async () => {
    sharedMarker.value = data.marker;
    sharedIsland.value = data.island;
  });
</script>

<div class="columns">
  <div class="column">
    <IslandMap zoom={12} height={40} />
    <IslandCoordinates />
  </div>
  <div class="column">
    <IslandDescription />
  </div>
</div>
