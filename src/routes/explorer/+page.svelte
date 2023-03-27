<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	import LeafletMap from "$lib/LeafletMap.svelte";
	import IslandLatLng from "$lib/IslandLatLng.svelte";
	import IslandDescription from "$lib/IslandDescription.svelte";
	import type { Island } from "../../services/oileain-types";

	let island: Island;
</script>

<div class="columns">
	<div class="column has-text-centered">
		<LeafletMap id="map-main" zoom={7} height={60} markerLayers={data.markerLayers} />
		{#if island}
			<IslandLatLng {island} />
		{/if}
	</div>
	<div class="column">
		<LeafletMap id="map-secondary" height={30} activeLayer="Satellite" />
		{#if island}
			<IslandDescription {island} />
		{/if}
	</div>
</div>
