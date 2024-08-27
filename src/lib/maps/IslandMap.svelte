<script lang="ts">
  import { sharedMarker } from "$lib/model/rune.svelte";
  import ControlLayers from "./MapLayers.svelte";
  import { Map, Marker } from "sveaflet";

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
    }
  });
</script>

<div class="box" style="height: {height}vh">
  {#if sharedMarker.value}
    <Map bind:instance options={{ center: [sharedMarker.value.location.lat, sharedMarker.value.location.lng], zoom: zoom }}>
      <ControlLayers {defautLayer}>
        <Marker latLng={[sharedMarker.value.location.lat, sharedMarker.value.location.lng]}></Marker>
      </ControlLayers>
    </Map>
  {/if}
</div>
