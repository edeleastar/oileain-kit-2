<script lang="ts">
  import LayerMap from "$lib/maps/LayerMap.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<LayerMap height={85} layers={data.markerLayers} />
