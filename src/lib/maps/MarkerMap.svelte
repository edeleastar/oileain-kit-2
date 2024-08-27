<script lang="ts">
  import type { MarkerSpec } from "$lib/model/markers";
  import { sharedMarker } from "$lib/rune.svelte";
  import ControlLayers from "./ControlLayers.svelte";
  import { Map, Marker } from "sveaflet";

  type Props = {
    zoom?: number;
    height?: number;
    marker: MarkerSpec;
    defautLayer?: string;
    instance?: any;
  };

  let { zoom = 8, height = 80, marker, defautLayer = "OpenStreetMap", instance }: Props = $props();

  $effect(() => {
    if (instance) {
      instance.flyTo(sharedMarker.value.location, 16);
    }
  });
</script>

<div class="box" style="height: {height}vh">
  <Map bind:instance options={{ center: [marker.location.lat, marker.location.lng], zoom: zoom }}>
    <ControlLayers {defautLayer}>
      <Marker latLng={[sharedMarker.value.location.lat, sharedMarker.value.location.lng]}></Marker>
    </ControlLayers>
  </Map>
</div>
