<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import IslandCoordinates from "$lib/islands/IslandCoordinates.svelte";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import { currentIsland } from "../../../lib/stores";
  import MarkerMap from "$lib/maps/MarkerMap.svelte";

  currentIsland.set(data.island);
</script>

<div class="columns">
  <div class="column">
    <MarkerMap marker={data.marker} zoom={6} height={40} />
    <IslandCoordinates island={data.island} />
  </div>
  <div class="column">
    <IslandDescription island={data.island} />
  </div>
</div>
