<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import type { PageData } from "./$types";
  import MarkerMap from "$lib/maps/MarkerMap.svelte";
  import LayerMap from "$lib/maps/LayerMap.svelte";
  import { sharedIsland, sharedMarker } from "$lib/rune.svelte";
  export let data: PageData;

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
    <MarkerMap marker={sharedMarker.value} zoom={14} height={40} />
  </div>
  <div class="column" style="height: 45vh; overflow-y: auto">
    <IslandDescription island={sharedIsland.value} />
  </div>
</div>
<div class="columns">
  <div class="column">
    <MarkerMap marker={sharedMarker.value} defautLayer={"Satellite"} zoom={14} height={40} />
  </div>
  <div class="column">
    <LayerMap zoom={9} height={40} location={sharedMarker.value.location} layers={data.markerLayers} />
  </div>
</div>
