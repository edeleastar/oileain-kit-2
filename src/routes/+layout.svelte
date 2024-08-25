<script lang="ts">
  import SideBar from "$lib/islands/SideBar.svelte";
  import Header from "../lib/islands/Header.svelte";
  import { onMount } from "svelte";
  import { oileainService } from "../lib/model/oileain-service";
  import type { IslandGroup } from "../lib/model/oileain-types";

  let allCoasts: IslandGroup[] = [];
  onMount(async () => {
    allCoasts = await oileainService.getCoasts();
  });
</script>

<Header />
<div class="container">
  <div class="columns">
    <div class="column is-four-fifths">
      <slot />
    </div>
    <div class="column">
      <SideBar {allCoasts} />
    </div>
  </div>
</div>
