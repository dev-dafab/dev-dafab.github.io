<script>
	import Icon from '@iconify/svelte';
</script>

<section id="about" class="gap-8 my-8 flex flex-col lg:flex-row">
				<div class="details-container">
					<div class="w-full flex justify-around">
						<img src="/experience.png" alt="Experience icon" class="cursor-pointer h-[2rem]" />
					</div>
					<h3>Experience</h3>
					<p>7+ years <br />Fullstack web Development</p>
				</div>

				<div class="details-container">
					<div class="w-full flex justify-around">
						<Icon icon="zondicons:education" class="cursor-pointer h-[2rem] w-[2rem]" />
					</div>
					<h3 class="font-lg">Education</h3>
					<p>B.Sc. Bachelors Degree<br /></p>
				</div>

				<div class="details-container">
					<div class="w-full flex justify-around">
						<Icon icon="fontisto:persons" class="cursor-pointer h-[2rem] w-[2rem]" />
					</div>
					<h3 class="font-lg">References</h3>
					<p>7 satified client<br /> Automobile - Insurance - Accommodation</p>
				</div>
</section>

<style>
	#about {
		position: relative;
	}

	.about-containers {
		gap: 2rem;
		margin-bottom: 2rem;
		margin-top: 2rem;
	}


	.about-details-container {
		justify-content: center;
		flex-direction: column;
	}

	.about-containers,
	.about-details-container {
		display: flex;
	}

	.about-pic {
		border-radius: 2rem;
	}

	.details-container {
		padding: 1.5rem;
		flex: 1;
		background: white;
		border-radius: 2rem;
		border: rgb(53, 53, 53) 0.1rem solid;
		border-color: rgb(163, 163, 163);
		text-align: center;
	}

	.section-container {
		gap: 4rem;
		height: 80%;
	}

	#experience {
		position: relative;
	}

	.experience-sub-title {
		color: rgb(85, 85, 85);
		font-weight: 600;
		font-size: 1.75rem;
		margin-bottom: 2rem;
	}

	.experience-details-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.article-container {
		display: flex;
		text-align: initial;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 2.5rem;
		justify-content: space-around;
	}
</style>
