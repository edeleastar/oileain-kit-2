<script lang="ts">
  import { Map, TileLayer, Marker, Popup, LayerGroup, ControlLayers } from "sveaflet";
  import type { MarkerLayer, MarkerSpec } from "../services/markers";

  export let location = { lat: 53.2734, lng: -7.7783203 };
  export let zoom = 8;
  export let height = 80;
  export let markerLayers: MarkerLayer[] = [];
</script>

<div class="box" style="height: {height}vh">
  <Map
    options={{
      center: [location.lat, location.lng],
      zoom: zoom
    }}
  >
    <ControlLayers>
      <TileLayer
        name="OpenStreetMap"
        url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
        options={{
          maxZoom: 19,
          attribution: "© OpenStreetMap"
        }}
        checked={true}
        layerType="base"
      />
      <TileLayer
        name="OpenTopoMap"
        url={"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"}
        options={{
          maxZoom: 19,
          attribution: "Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)"
        }}
        layerType="base"
      />
      <TileLayer
        name="Satellite"
        url={"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"}
        options={{
          maxZoom: 19,
          attribution: "Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)"
        }}
        layerType="base"
      />

      {#each markerLayers as layer}
        <LayerGroup checked={true} name={layer.title} layerType="overlay">
          {#each layer.markerSpecs as markerSpec}
            <Marker latLng={[markerSpec.location.lat, markerSpec.location.lng]}>
              <Popup options={{ content: `<a href='/poi/${markerSpec.id}'>${markerSpec.title} <small>(click for details}</small></a>` }} />
            </Marker>
          {/each}
        </LayerGroup>
      {/each}
    </ControlLayers>
  </Map>
</div>
