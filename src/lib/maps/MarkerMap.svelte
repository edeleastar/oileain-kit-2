<script lang="ts">
  import type { MarkerSpec } from "$lib/model/markers";
  import ControlLayers from "./ControlLayers.svelte";
  import { Map, Marker } from "sveaflet";

  type Props = {
    zoom?: number;
    height?: number;
    marker: MarkerSpec;
    defautLayer?: string;
    instance?: any;
  };

  let { zoom = 8, height = 80, marker, defautLayer = "OpenStreetMap", instance = $bindable() }: Props = $props();

  $effect(() => {
    if (instance) {
      instance.flyTo(marker.location, 16);
    }
  });
</script>

<div class="box" style="height: {height}vh">
  <Map bind:instance options={{ center: [marker.location.lat, marker.location.lng], zoom: zoom }}>
    <ControlLayers {defautLayer}>
      <Marker latLng={[marker.location.lat, marker.location.lng]}></Marker>
    </ControlLayers>
  </Map>
</div>
