<script lang="ts">
  import { sharedIsland } from "$lib/model/shared-state";
</script>

<section class="section">
  {#if sharedIsland.value}
    <h1 class="title">{@html sharedIsland?.value?.name}</h1>
  {:else}
    <h4 class="title">Select a marker...</h4>
  {/if}
  <h2 class="subtitle">GPS-compatible</h2>
  <div>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
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
    </table>
  </div>
</section>
