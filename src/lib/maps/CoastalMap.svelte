<script lang="ts">
  import MapLayers from "./MapLayers.svelte";
  import { Map } from "sveaflet";
  import type { MarkerLayer } from "../model/markers";
  import CoastalMarkers from "./CoastalMarkers.svelte";
  import { sharedIsland, sharedMarker } from "$lib/model/rune.svelte";
  import { oileainService } from "$lib/model/oileain-service";

  type Props = {
    location?: any;
    zoom?: number;
    height?: number;
    markerLayers?: MarkerLayer[];
    defautLayer?: string;
    instance?: any;
  };

  let { location = { lat: 53.2734, lng: -7.7783203 }, zoom = 8, height = 80, markerLayers = [], defautLayer = "OpenStreetMap", instance }: Props = $props();

  async function onClick(event: any) {
    let markerSpec = event.popup._source.options.alt.replace(/\\"/g, '"');
    markerSpec = JSON.parse(markerSpec);
    sharedMarker.value = markerSpec;
    let island = await oileainService.getIslandById(markerSpec.id);
    sharedIsland.value = island;
  }

  $effect(() => {
    if (instance) {
      instance.on("popupopen", onClick);
    }
  });
</script>

<div class="box" style="height: {height}vh">
  <Map bind:instance options={{ center: [location.lat, location.lng], zoom: zoom }}>
    <MapLayers {defautLayer}>
      <CoastalMarkers {markerLayers} />
    </MapLayers>
  </Map>
</div>
