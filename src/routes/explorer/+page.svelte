<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import IslandLatLng from "$lib/islands/IslandLatLng.svelte";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import LayerMap from "$lib/maps/LayerMap.svelte";
  import MarkerMap from "$lib/maps/MarkerMap.svelte";
  import { sharedIsland, sharedMarker } from "$lib/rune.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    sharedMarker.value = data.marker;
    sharedIsland.value = data.island;
  });
</script>

<div class="columns">
  <div class="column has-text-centered">
    <LayerMap zoom={7} height={60} layers={data.markerLayers} />
    {#if sharedIsland.value}
      <IslandLatLng island={sharedIsland.value} />
    {/if}
  </div>
  <div class="column">
    {#if sharedIsland.value}
      <MarkerMap marker={sharedMarker.value} zoom={16} height={40} />
      <IslandDescription island={sharedIsland.value} />
    {/if}
  </div>
</div>
