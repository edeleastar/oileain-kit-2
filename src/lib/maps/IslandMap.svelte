<script lang="ts">
  import { sharedMarker } from "$lib/model/shared-state";
  import { ControlLayers, Map, Marker } from "sveaflet";
  import MapLayers from "./MapLayers.svelte";
  import L from "leaflet";

  type Props = {
    zoom?: number;
    height?: number;
    defautLayer?: string;
    instance?: any;
  };

  let { zoom = 8, height = 80, defautLayer = "OpenStreetMap", instance }: Props = $props();

  $effect(() => {
    if (instance && sharedMarker.value) {
      instance.flyTo(sharedMarker.value.location, 16);
      const marker = L.marker(sharedMarker.value.location);
      marker.addTo(instance);
    }
  });
</script>

<div class="box" style="height: {height}vh">
  {#if sharedMarker.value}
    <Map bind:instance options={{ center: [sharedMarker.value.location.lat, sharedMarker.value.location.lng], zoom: zoom }}>
      <ControlLayers>
        <MapLayers {defautLayer} />
        <Marker latLng={[sharedMarker.value.location.lat, sharedMarker.value.location.lng]}></Marker>
      </ControlLayers>
    </Map>
  {/if}
</div>
