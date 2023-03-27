<script lang="ts">
	import SideBar from "$lib/SideBar.svelte";
	import Header from "../lib/Header.svelte";
	import { onMount } from "svelte";
	import { oileainService } from "../services/oileain-service";
	import type { IslandGroup } from "../services/oileain-types";

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
