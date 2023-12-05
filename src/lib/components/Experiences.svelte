<script>
	import CVTags from './CVTags.svelte';
	import { config, t } from '$lib/translations';
	$: projectNameSpaces = config.loaders.filter((v) => v.key.includes('project')).map((v) => v.key);
	const diffDate = (_d1, _d2) => {
		const d1 = new Date(_d1);
		const d2 = new Date(_d2);
		const d1Y = d1.getFullYear();
		const d2Y = d2.getFullYear();
		const d1M = d1.getMonth();
		const d2M = d2.getMonth();
		return d2M + 12 * d2Y - (d1M + 12 * d1Y);
	};
</script>

<h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>

{#each projectNameSpaces as ns}
	<div class="mb-6">
		<div class="flex justify-between">
			<span class="text-gray-600 font-bold">{$t(`${ns}.title`)}</span>
			<p>
				<span class="text-gray-600"
					>{diffDate($t(`${ns}.start`), $t(`${ns}.end`))} {$t('common.month')}s</span
				>
			</p>
		</div>
		<p class="text-gray-600 text-xs">{$t(`${ns}.company`)}</p>
		<p class="mt-2">{$t(`${ns}.description`)}</p>
		<CVTags tags={$t(`${ns}.tags`)} />
	</div>
{/each}
