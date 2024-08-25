<script lang="ts">
  import ControlLayers from "./ControlLayers.svelte";
  import { Map } from "sveaflet";
  import type { MarkerLayer } from "../model/markers";
  import Layers from "./Layers.svelte";
  import { markerSelected } from "$lib/stores";

  export let location = { lat: 53.2734, lng: -7.7783203 };
  export let zoom = 8;
  export let height = 80;
  export let layers: MarkerLayer[] = [];

  function onClick(event: any) {
    let markerSpec = event.popup._source.options.alt.replace(/\\"/g, '"');
    markerSpec = JSON.parse(markerSpec);
    markerSelected.set(markerSpec);
  }

  let map: any;

  $: if (map) {
    map.on("popupopen", onClick);
  }
</script>

<div class="box" style="height: {height}vh">
  <Map options={{ center: [location.lat, location.lng], zoom: zoom }} bind:instance={map}>
    <ControlLayers>
      <Layers {layers} />
    </ControlLayers>
  </Map>
</div>
