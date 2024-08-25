<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import IslandLatLng from "$lib/islands/IslandLatLng.svelte";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import { currentIsland, markerSelected } from "../../lib/stores";
  import type { MarkerSpec } from "../../lib/model/markers";
  import type { Island } from "../../lib/model/oileain-types";
  import { oileainService } from "../../lib/model/oileain-service";
  import LayerMap from "$lib/maps/LayerMap.svelte";
  import MarkerMap from "$lib/maps/MarkerMap.svelte";

  let island: Island;

  markerSelected.subscribe(async (marker: MarkerSpec) => {
    if (marker) {
      island = await oileainService.getIslandById(marker.id);
      currentIsland.set(island);
    }
  });
</script>

<div class="columns">
  <div class="column has-text-centered">
    <LayerMap zoom={7} height={60} layers={data.markerLayers} />
    {#if island}
      <IslandLatLng {island} />
    {/if}
  </div>
  <div class="column">
    {#if $markerSelected}
      <MarkerMap marker={$markerSelected} zoom={16} height={40} />
    {/if}
    {#if island}
      <IslandDescription {island} />
    {/if}
  </div>
</div>
