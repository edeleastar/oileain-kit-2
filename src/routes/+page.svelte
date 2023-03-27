<script lang="ts">
	import LeafletMap from "$lib/LeafletMap.svelte";
	import { currentIsland } from "../services/stores";
	import type { PageData } from "./$types";
	export let data: PageData;

	currentIsland.set(null);
</script>

<LeafletMap height={85} markerLayers={data.markerLayers} />
