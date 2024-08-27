<script lang="ts">
  import CoastalMap from "$lib/maps/CoastalMap.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<CoastalMap height={85} markerLayers={data.markerLayers} />
