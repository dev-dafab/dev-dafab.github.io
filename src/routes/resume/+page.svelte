<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
	import Summary from '$lib/components/Summary.svelte';
	import Experiences from '$lib/components/Experiences.svelte';
	import i18n from '$i18n';
	console.log(i18n);
</script>

<aside class="col-span-3 profile" style:--profile-card="profile-card">
	<Profile mode={'small'} />
</aside>
<div class="col-span-12 lg:col-span-9">
	<Summary />
	<Experiences />
</div>

<style>
	.profile {
		view-transition-name: var(--profile-card);
	}
</style>
