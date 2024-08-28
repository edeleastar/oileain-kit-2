<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import IslandLatLng from "$lib/islands/IslandLatLng.svelte";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import CoastalMap from "$lib/maps/CoastalMap.svelte";
  import IslandMap from "$lib/maps/IslandMap.svelte";
</script>

<div class="columns">
  <div class="column has-text-centered">
    <CoastalMap zoom={7} height={60} markerLayers={data.markerLayers} />
    <IslandLatLng />
  </div>
  <div class="column">
    <IslandMap zoom={16} height={40} />
    <IslandDescription />
  </div>
</div>
