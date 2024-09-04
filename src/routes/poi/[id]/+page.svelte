<script lang="ts">
  import IslandCoordinates from "$lib/islands/IslandCoordinates.svelte";
  import IslandDescription from "$lib/islands/IslandDescription.svelte";
  import IslandMap from "$lib/maps/IslandMap.svelte";
</script>

<div class="columns">
  <div class="column">
    <IslandMap zoom={12} height={40} />
    <IslandCoordinates />
  </div>
  <div class="column">
    <IslandDescription />
  </div>
</div>
