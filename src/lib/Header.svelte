<script lang="ts">
	import Icon from "@iconify/svelte";
	import { currentIsland } from "../services/stores";
</script>

<div class="columns is-vcentered">
	<div class="column is-two-thirds">
		<div class="box has-text-centered columns m-2 p-1">
			<div class="column is-2">
				<a target="_blank" href="https://github.com/edeleastar/oileain-kit-2">
					<div class="-mb-2">
						<Icon icon="logos:github-octocat" width="60" />
					</div>
					<h6 class="is-size-7">Source Repo</h6>
				</a>
			</div>
			<div class="column">
				<div class="title">Oileain: Islands of Ireland</div>
				{#if $currentIsland}
					{@html $currentIsland?.nameHtml}
				{:else}
					<b> Select a marker to explore island...</b>
				{/if}
			</div>
		</div>
	</div>
	<div class="column">
		<div class="box has-text-centered columns m-2 p-1">
			<a href="/" class="column">
				<Icon icon="mdi:compass-rose" width="64" />
			</a>
			<a href="/explorer" class="column">
				<Icon icon="ph:compass-tool-duotone" width="64" />
			</a>
			<a href="/navigator/Great-Saltee-Island" class="column">
				<Icon icon="mdi:ruler-square-compass" width="64" />
			</a>
		</div>
	</div>
</div>
