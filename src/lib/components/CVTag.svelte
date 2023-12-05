<script>
	import Icon from '@iconify/svelte';
	export let tag;
</script>

<div class="bg-gray-100 p-1.5 rounded inline-flex mt-auto mb-auto space-x-1">
	<Icon icon="mdi:{tag}" height={22} width={22} />
	<span class="text-gray-600 text-xs pt-0.5">
		{tag}
	</span>
</div>
