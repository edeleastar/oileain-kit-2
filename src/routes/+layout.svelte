<script lang="ts">
	import Header from "../lib/Header.svelte";
</script>

<Header />
<div class="container">
	<div class="columns">
		<div class="column">
			<slot />
		</div>
	</div>
</div>
