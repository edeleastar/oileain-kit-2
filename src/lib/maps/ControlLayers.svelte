<script lang="ts">
  import { TileLayer, ControlLayers } from "sveaflet";
</script>

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
  <slot />
</ControlLayers>
