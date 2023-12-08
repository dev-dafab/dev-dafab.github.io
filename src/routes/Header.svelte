<script lang="ts">
	import { click_outside } from '$lib';

	type ItemType = {
		href: string;
		icon: string;
		text?: string;
	};

	export let navItems: Array<ItemType> = [];
	export let fullScreenLayout = false;

	let navigationList: HTMLUListElement;
	let navToggle: HTMLButtonElement;
	let screenSize: number;
	let scrollY: number;

	let menuExpanded = false;

	$: iconSize = screenSize < 640 ? 'md' : '2x';
	$: homeUrl = (navItems.find((v) => v.icon === 'house') || { href: '/' }).href;
	$: scrollClass = scrollY < 77 ? 'bg-white' : 'bg-gray-600';
	$: console.log(scrollY);

	const toggleMenuClicked = () => {
		const isVisible = navigationList.getAttribute('data-visible');
		if (isVisible === 'true') {
			navigationList.setAttribute('data-visible', 'false');
			navigationList.classList.replace('translate-x-0', 'translate-x-full');
			navigationList.setAttribute('aria-expanded', 'false');
			menuExpanded = false;
		} else {
			navigationList.setAttribute('data-visible', 'true');
			navigationList.classList.replace('translate-x-full', 'translate-x-0');
			navigationList.setAttribute('aria-expanded', 'true');
			menuExpanded = true;
		}
	};

	const handle_click_outside = (srcElem: any) => {
		if (navToggle.contains(srcElem)) return;
		if (menuExpanded) {
			toggleMenuClicked();
		}
	};
</script>

<svelte:window bind:scrollY bind:innerWidth={screenSize} />

<!-- col-span-12 flex flex-col lg:flex-row justify-center gap-20 main-section -->
<header class="fixed w-full z-10 top-0 min-h-12" class:bg-gray-100={scrollY > 76}>
	<div class="w-full lg:w-2/3 mx-auto flex h-full">
		<div class="w-full px-4 lg:px-0 leading-normal h-full grid grid-cols-5 items-center">
			<p class="col-span-3 cursor-pointer logo" href={homeUrl}>
				<span class="font-bold">Fabrice Dufils Siyapdje</span>
			</p>

			<button
				on:click|preventDefault|stopPropagation={toggleMenuClicked}
				bind:this={navToggle}
				class="mobile-nav-toggle group block lg:hidden z-50"
				aria-controls="nav-item-list"
				aria-expanded="false"
			>
				<span class="sr-only">Menu</span>
				<div
					data-open={menuExpanded === true || undefined}
					class="relative flex overflow-hidden items-center justify-center rounded-full w-[65px] h-[65px] transform transition-all ring-0 ring-gray-300 hover:ring-8 data-[open=true]:ring-4 ring-opacity-30 duration-200"
				>
					<div
						data-open={menuExpanded === true || undefined}
						class="flex flex-col justify-between w-[30px] h-[30px] transform transition-all duration-300 origin-center overflow-hidden data-[open=true]:translate-x-1.5"
					>
						<!-- .hamburger-icon { -->
						<!--   display: flex; -->
						<!--   flex-direction: column; -->
						<!--   justify-content: space-between; -->
						<!--   height: 24px; -->
						<!--   width: 30px; -->
						<!--   cursor: pointer; -->
						<!-- } -->
						<!---->
						<!-- .hamburger-icon span { -->
						<!--   width: 100%; -->
						<!--   height: 2px; -->
						<!--   background-color: black; -->
						<!--   transition: all 0.3 ease-in-out; -->
						<!-- } -->
						<div
							data-open={menuExpanded === true || undefined}
							class="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left data-[open=true]:rotate-[42deg] data-[open=true]:w-2/3 delay-150"
						/>
						<div
							data-open={menuExpanded === true || undefined}
							class="bg-black h-[2px] w-7 rounded transform transition-all duration-300 data-[open=true]:translate-x-10"
						/>
						<div
							data-open={menuExpanded === true || undefined}
							class="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left data-[open=true]:-rotate-[42deg] data-[open=true]:w-2/3 delay-150"
						/>
					</div>
				</div>
			</button>
			<nav class="col-span-1 lg:col-span-2 lg:flex lg:items-center">
				<ul
					use:click_outside={handle_click_outside}
					bind:this={navigationList}
					data-visible="false"
					id="nav-item-list"
					class="uppercase flex flex-col lg:flex-row p-[--mobile-nav-item-padding] lg:p-0 inset-[--mobile-nav-item-inset] lg:inset-[--nav-item-inset] bg-[--mobile-nav-background] lg:bg-[transparent] backdrop-blur-xl lg:backdrop-blur-none fixed translate-x-full lg:translate-x-0 ease-out duration-300 transition-transform"
				>
					{#each navItems as { icon, text, href }}
						<li>
							<a {href} data-sveltekit-preload-data="off">
								<span on:click={toggleMenuClicked} class="m-auto ml-1"> {text} </span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
	:root {
		--mobile-nav-item-padding: min(25vh, 10rem) 2rem;
		--mobile-nav-item-inset: 0 0 0 30%;
		--nav-item-inset: auto;
		--mobile-nav-background: hsl(0 0% 100% / 0.1);
	}
	nav ul {
		gap: 2.5rem;
	}

	.mobile-nav-toggle {
		position: absolute;
		aspect-ratio: 1;
		width: 2rem;
		top: calc(var(--header-height) / 3);
		right: 2rem;
		z-index: 9999;
	}
</style>
