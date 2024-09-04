<script lang="ts">
  import type { Island } from "../model/oileain-types";
  import { sharedIsland } from "$lib/model/shared-state";
</script>

<section class="section has-text-centered">
  <h2 class="subtitle">GPS-compatible</h2>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    {#if sharedIsland}
      <tbody>
        <tr>
          <td>Latitude</td>
          <td>{sharedIsland?.value?.coordinates.geo.lat}</td>
        </tr>
        <tr>
          <td>Longitude</td>
          <td>{sharedIsland?.value?.coordinates.geo.long}</td>
        </tr>
      </tbody>
    {/if}
  </table>
  <h2 class="subtitle">Transverse Mercator</h2>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <tbody>
      <tr>
        <td>Eastings</td>
        <td>{sharedIsland?.value?.coordinates.tmcGrid.eastings}</td>
      </tr>
      <tr>
        <td>Northings</td>
        <td>{sharedIsland?.value?.coordinates.fullIrishGrid.northings}</td>
      </tr>
    </tbody>
  </table>

  <h2 class="subtitle">Full Irish Grid</h2>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <tbody>
      <tr>
        <td>Eastings</td>
        <td>{sharedIsland?.value?.coordinates.fullIrishGrid.eastings}</td>
      </tr>
      <tr>
        <td>Northings</td>
        <td>{sharedIsland?.value?.coordinates.fullIrishGrid.northings}</td>
      </tr>
    </tbody>
  </table>

  <h2 class="subtitle">Irish Grid</h2>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <tbody>
      <tr>
        <td>Sheet</td>
        <td>{sharedIsland?.value?.coordinates.irishGrid.sheet}</td>
      </tr>
      <tr>
        <td>Eastings</td>
        <td>{sharedIsland?.value?.coordinates.irishGrid.eastings}</td>
      </tr>
      <tr>
        <td>Norhtings</td>
        <td>{sharedIsland?.value?.coordinates.irishGrid.northings}</td>
      </tr>
    </tbody>
  </table>
</section>
