<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import type { PageData } from "./$types";
  import type { MarkerSpec } from "$lib/model/markers";
  import { currentIsland, markerSelected } from "$lib/stores";
  import { oileainService } from "$lib/model/oileain-service";
  import MarkerMap from "$lib/maps/MarkerMap.svelte";
  import LayerMap from "$lib/maps/LayerMap.svelte";
  export let data: PageData;

  page.subscribe((path) => {
    currentIsland.set(data.island);
    markerSelected.set(data.marker);
  });

  onMount(async () => {
    currentIsland.set(data.island);
    markerSelected.set(data.marker);
  });

  markerSelected.subscribe(async (marker: MarkerSpec) => {
    if (marker) {
      let island = await oileainService.getIslandById(marker.id);
      currentIsland.set(island);
    }
  });
</script>

<div class="columns">
  <div class="column">
    <MarkerMap marker={$markerSelected} zoom={14} height={40} />
  </div>
  <div class="column" style="height: 45vh; overflow-y: auto">
    <IslandDescription island={data.island} />
  </div>
</div>
<div class="columns">
  <div class="column">
    <MarkerMap marker={$markerSelected} zoom={14} height={40} />
  </div>
  <div class="column">
    {#if $markerSelected}
      <LayerMap zoom={9} height={40} location={$markerSelected.location} layers={data.markerLayers} />
    {/if}
  </div>
</div>
