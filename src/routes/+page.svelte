<script lang="ts">
  import LayerMap from "$lib/maps/LayerMap.svelte";
  import { currentIsland } from "../lib/stores";
  import type { PageData } from "./$types";
  export let data: PageData;

  currentIsland.set(null);
</script>

<LayerMap height={85} layers={data.markerLayers} />
