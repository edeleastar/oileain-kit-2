<script lang="ts">
  import { Marker, Popup, LayerGroup } from "sveaflet";
  import type { MarkerLayer } from "../model/markers";

  type Props = {
    layers: MarkerLayer[];
  };

  let { layers = [] }: Props = $props();
</script>

{#each layers as layer}
  <LayerGroup checked={true} name={layer.title} layerType="overlay">
    {#each layer.markerSpecs as markerSpec, i}
      <Marker latLng={[markerSpec.location.lat, markerSpec.location.lng]} options={{ alt: JSON.stringify(markerSpec) }}>
        <Popup options={{ content: `<a href='/poi/${markerSpec.id}'>${markerSpec.title} <small>(click for details}</small></a>` }} />
      </Marker>
    {/each}
  </LayerGroup>
{/each}
