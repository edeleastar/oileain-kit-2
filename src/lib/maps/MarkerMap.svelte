<script lang="ts">
  import type { MarkerSpec } from "$lib/model/markers";
  import ControlLayers from "./ControlLayers.svelte";
  import { Map, Marker } from "sveaflet";

  export let zoom = 8;
  export let height = 80;
  export let marker: MarkerSpec;
  export let defautLayer = "OpenStreetMap";

  let map: any;

  $: if (map) {
    map.flyTo(marker.location, 16);
  }
</script>

<div class="box" style="height: {height}vh">
  <Map bind:instance={map} options={{ center: [marker.location.lat, marker.location.lng], zoom: zoom }}>
    <ControlLayers {defautLayer}>
      <Marker latLng={[marker.location.lat, marker.location.lng]}></Marker>
    </ControlLayers>
  </Map>
</div>
