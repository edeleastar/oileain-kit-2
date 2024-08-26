<script lang="ts">
  import ControlLayers from "./ControlLayers.svelte";
  import { Map } from "sveaflet";
  import type { MarkerLayer } from "../model/markers";
  import Layers from "./Layers.svelte";
  import { markerSelected } from "$lib/stores";

  type Props = {
    location?: any;
    zoom?: number;
    height?: number;
    layers?: MarkerLayer[];
    defautLayer?: string;
    instance?: any;
  };

  let { location = { lat: 53.2734, lng: -7.7783203 }, zoom = 8, height = 80, layers = [], defautLayer = "OpenStreetMap", instance = $bindable() }: Props = $props();

  function onClick(event: any) {
    let markerSpec = event.popup._source.options.alt.replace(/\\"/g, '"');
    markerSpec = JSON.parse(markerSpec);
    markerSelected.set(markerSpec);
  }

  $effect(() => {
    if (instance) {
      instance.on("popupopen", onClick);
    }
  });
</script>

<div class="box" style="height: {height}vh">
  <Map bind:instance options={{ center: [location.lat, location.lng], zoom: zoom }}>
    <ControlLayers {defautLayer}>
      <Layers {layers} />
    </ControlLayers>
  </Map>
</div>
