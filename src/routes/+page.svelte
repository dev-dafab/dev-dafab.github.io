<script>
	import Profile from '$lib/components/Profile.svelte';
	import About from '$lib/components/About.svelte';
</script>

<Profile mode="full" />
<section class="rounded-lg col-span-12">
	<About />
</section>
<style>
	.profile {
		view-transition-name: var(--profile-card);
	}
</style>
