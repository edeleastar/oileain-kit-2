<script lang="ts">
  import { Map, TileLayer, Marker, Popup, LayerGroup, ControlLayers } from "sveaflet";
  import type { MarkerLayer, MarkerSpec } from "../model/markers";
  import { markerSelected } from "../stores";
  import type { Control, LatLng } from "leaflet";

  export let location = { lat: 53.2734, lng: -7.7783203 };
  export let zoom = 8;
  export let height = 80;
  export let markerLayers: MarkerLayer[] = [];
  export let activeLayer = "Terrain";
  let overlays: Control.LayersObject = {};

  let markers: any[] = [];

  function onClick(event: any) {
    let markerSpec = event.popup._source.options.alt.replace(/\\"/g, '"');
    markerSpec = JSON.parse(markerSpec);
    markerSelected.set(markerSpec);
  }

  let map: any;

  $: if (map) {
    map.on("popupopen", onClick);
  }

  // $: if (markers) {
  //   markers.forEach((marker) => {
  //     // console.log(marker);
  //     marker.on("click", onClick);
  //     marker.on("popupopen", (event: any) => {
  //       console.log("popup open");
  //       //const marker = event.popup._source;
  //       //console.log(marker);
  //       // const markerSpec = markerMap.get(marker);
  //       // markerSelected.set(markerSpec!);
  //     });
  //   });
  // }
</script>

<div class="box" style="height: {height}vh">
  <Map
    options={{
      center: [location.lat, location.lng],
      zoom: zoom
    }}
    bind:instance={map}
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
          {#each layer.markerSpecs as markerSpec, i}
            <Marker latLng={[markerSpec.location.lat, markerSpec.location.lng]} bind:instance={markers[i]} options={{ alt: JSON.stringify(markerSpec) }}>
              <Popup options={{ content: `<a href='/poi/${markerSpec.id}'>${markerSpec.title} <small>(click for details}</small></a>` }} />
            </Marker>
          {/each}
        </LayerGroup>
      {/each}
      <Marker latLng={[$markerSelected.location.lat, $markerSelected.location.lng]}></Marker>
    </ControlLayers>
  </Map>
</div>
