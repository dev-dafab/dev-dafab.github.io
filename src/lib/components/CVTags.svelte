<script>
	import CVTag from './CVTag.svelte';
	export let tags;
</script>

<div class="flex flex-wrap space-x-1.5">
	{#each tags as tag}
		<CVTag {tag} />
	{/each}
</div>
