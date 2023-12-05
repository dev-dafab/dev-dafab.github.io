<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(() => {
				return new Promise(resolve);
			});
		});
	});
</script>

<header class="print:hidden grid grid-cols-12 gab-6 container mx-auto my-10">
	<div class="logo col-span-3 pl-6">Fabrice D. Siyapdje</div>
	<nav style="justify-self: end;" class="col-span-9 flex justify-around  h-[14vh] mt-2">
		<ul class="flex nav-links gap-8 text-2xl">
			<li>
				<a href="/">
					Home
				</a>
			</li>
			<li>
				<a href="/about">
					<!-- <span class="badge badge-xs badge-info" /> -->
					About
				</a>
			</li>
			<li>
				<a href="/projects">
					<!-- <span class="badge badge-xs badge-info" /> -->
					Projects
				</a>
			</li>
			<li>
				<a href="/blog">
					<!-- <span class="badge badge-xs badge-info" /> -->
					Blog
				</a>
			</li>
		</ul>
	</nav>
</header>

<div class="grid grid-cols-12 gab-6 container mx-auto my-10">
	<slot />
</div>

<style>
	.logo {
		font-size: 2rem;
	}

	.logo:hover {
		cursor: default;
	}

	.nav-links {
		font-size: 1.5rem;
	}
</style>
