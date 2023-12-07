<script>
	import Profile from '$lib/components/Profile.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
</script>

<Profile mode="full" />
<section class="rounded-lg col-span-12">
	<About />
</section>
<section class="rounded-lg col-span-12">
	<Skills />
</section>

<style>
	.profile {
		view-transition-name: var(--profile-card);
	}
</style>
