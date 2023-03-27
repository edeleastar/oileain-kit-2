<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import IslandDescription from "$lib/IslandDescription.svelte";
	import LeafletMap from "$lib/LeafletMap.svelte";
	import type { PageData } from "./$types";
	import { generateMarkerSpec } from "../../../services/oileain-utils";
	import type { MarkerSpec } from "../../../services/markers";
	import { currentIsland } from "../../../services/stores";
	export let data: PageData;

	let mapTerrain: LeafletMap;
	let mapSat: LeafletMap;
	let mapContext: LeafletMap;

	function zoomTo(marker: MarkerSpec) {
		mapTerrain?.addPopupMarkerAndZoom("selected", marker);
		mapSat?.moveTo(marker.location, 14);
		mapContext?.moveTo(marker.location, 10);
	}

	page.subscribe((path) => {
		const marker = generateMarkerSpec(data.island);
		currentIsland.set(data.island);
		mapTerrain?.addPopupMarkerAndZoom("selected", marker);
		mapSat?.moveTo(marker.location, 14);
		mapContext?.moveTo(marker.location, 10);
	});

	onMount(async () => {
		zoomTo(generateMarkerSpec(data.island));
		currentIsland.set(data.island);
	});
</script>

<div class="columns">
	<div class="column">
		<LeafletMap id="terrain" height={40} bind:this={mapTerrain} zoom={14} />
	</div>
	<div class="column" style="height: 45vh; overflow-y: auto">
		<IslandDescription island={data.island} />
	</div>
</div>
<div class="columns">
	<div class="column">
		<LeafletMap id="sat" activeLayer={"Satellite"} height={40} bind:this={mapSat} zoom={14} />
	</div>
	<div class="column">
		<LeafletMap id="context" height={40} markerLayers={data.markerLayers} bind:this={mapContext} zoom={12} />
	</div>
</div>
