<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import Header from './Header.svelte';

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(() => {
				return new Promise(resolve);
			});
		});
	});

	const toggleMenu = () => {};
	const navItems = [
		{ href: '/', text: 'Home' },
		{ href: '/about', text: 'About' },
		{ href: '/projects', text: 'Projects' },
		{ href: '/blog', text: 'Blog' }
	];
</script>

<Header {navItems} />
<main role="main" class="grid grid-cols-0 md:grid-cols-12 gab-6 container mx-auto py-[var(--header-height)]">
	<slot />
</main>
