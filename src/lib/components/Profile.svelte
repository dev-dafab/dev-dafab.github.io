<script lang="ts">
	import Icon from '@iconify/svelte';
	import Skills from './Skills.svelte';
	const downloadButtonClicked = () => {};
	export let mode: 'full' | 'small' = 'full';
</script>

{#if mode === 'small'}
	<div class="w-full h-full">
		<div class="p-6 items-center">
			<div class="flex flex-col items-center">
				<img
					src="/me.jpeg"
					class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
					alt="profile picture"
				/>
				<div class="flex">
					<h1 class="text-xl font-bold">Fabrice Dufils Siyapdje</h1>
				</div>
				<p class="text-gray-600">Fullstack Web Developer</p>
				<div class="flex justify-center items-center">
					<a
						class="text-gray-700 hover:text-orange-600"
						aria-label="Visit TrendyMinds LinkedIn"
						href="http://lol"
						target="_blank"
					>
						<Icon icon="mdi:linkedin" height={32} width={32} />
					</a>
					<a
						class="text-gray-700 hover:text-orange-600"
						aria-label="Visit TrendyMinds Facebook"
						href="http://lol"
						target="_blank"
					>
						<Icon icon="fa6-brands:square-xing" width="28" height="28" />
					</a>
				</div>

				<div class="mt-6 flex flex-wrap gap-4 justify-center">
					<a href="/resume" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
						>Contact</a
					>
					<a href="/resume" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
						>Resume</a
					>
				</div>
			</div>
			<Skills />
		</div>
	</div>
{:else}
	<section class="col-span-12 flex flex-col lg:flex-row justify-center gap-20 main-section">
		<div class="section__pic-container h-56 w-56 lg:h-96 lg:w-96 justify-center self-center flex">
			<img src="/me.jpeg" alt="John Doe profile picture" class="rounded-full" />
		</div>
		<div class="section__text text-center self-center">
			<p class="section__text__p1">Hello, I'm</p>
			<h1 class="title">Fabrice D. Siyapdje</h1>
			<p class="section__text__p2">Fullstack Web Developer</p>
			<div class="btn-container">
				<a class="btn btn-color-2" href="/resume"> Download CV </a>
				<button class="btn btn-color-1" onclick="location.href='./#contact'"> Contact Info </button>
			</div>
			<div id="socials-container">
				<img
					src="/linkedin.png"
					alt="My LinkedIn profile"
					class="h-[2rem]"
					onclick="location.href='https://linkedin.com/'"
				/>
				<img
					src="/github.png"
					alt="My Github profile"
					class="h-[2rem]"
					onclick="location.href='https://github.com/'"
				/>
			</div>
		</div>
	</section>
{/if}

<style>
	.section__text p {
		font-weight: 600;
	}

	.section__text__p1 {
		text-align: center;
	}

	.section__text__p2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}
	.title {
		font-size: 3rem;
		text-align: center;
	}

	#socials-container {
		display: flex;
		justify-content: center;
		margin-top: 1rem;
		gap: 1rem;
	}

	.btn-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.btn {
		font-weight: 600;
		transition: all 300ms ease;
		padding: 1rem;
		width: 8rem;
		border-radius: 2rem;
	}

	.btn-color-1,
	.btn-color-2 {
		border: rgb(53, 53, 53) 0.1rem solid;
	}

	.btn-color-1:hover,
	.btn-color-2:hover {
		cursor: pointer;
	}

	.btn-color-1,
	.btn-color-2:hover {
		background: rgb(53, 53, 53);
		color: white;
	}

	.btn-color-1:hover {
		background: rgb(0, 0, 0);
	}

	.btn-color-2 {
		background: none;
	}

	.btn-color-2:hover {
		border: rgb(255, 255, 255) 0.1rem solid;
	}

	.btn-container {
		gap: 1rem;
	}
</style>
