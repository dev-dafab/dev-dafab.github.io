<script>
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col">
	<div class="skill-set w-full">
		<h2>Database:</h2>
		<ul>
			<li>
				<Icon icon="skill-icons:mysql-light" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> MySQL
			</li>
			<li>
				<Icon
					icon="skill-icons:postgresql-light"
					class="inline-flex w-6 h-6 pr-1 first:-mt-1"
				/>PostgreSQL
			</li>
		</ul>
	</div>

	<div class="skill-set">
		<h2 id="programming-languages">Programming languages</h2>
		<ul>
			<li>
				<ul>
					<li>
						<Icon
							icon="skill-icons:javascript"
							class="inline-flex w-6 h-6 pr-1 first:-mt-1"
						/>JavaScript
					</li>
					<li>
						<Icon
							icon="skill-icons:typescript"
							class="inline-flex w-6 h-6 pr-1 first:-mt-1"
						/>TypeScript
					</li>
					<li>
						<Icon icon="skill-icons:html" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />HTML/CSS
					</li>
					<li>
						<Icon icon="skill-icons:java-light" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Java
					</li>
				</ul>
			</li>
		</ul>
	</div>

	<div class="skill-set">
		<h2 id="frameworks">Frameworks</h2>
		<ul>
			<li>
				<Icon icon="simple-icons:springboot" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Spring boot
			</li>
			<li>
				<Icon
					icon="skill-icons:expressjs-dark"
					class="inline-flex w-6 h-6 pr-1 first:-mt-1"
				/>ExpressJS
			</li>
			<li><Icon icon="logos:nestjs" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> NestJS</li>

			<li>
				<Icon
					icon="vscode-icons:file-type-angular"
					class="inline-flex w-6 h-6 pr-1 -mt-1 bg-white"
				/> Angular
			</li>
			<li>
				<Icon icon="devicon:react" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />React / React
				Native
			</li>
			<li>
				<Icon icon="devicon:svelte" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Svelte/Sveltekit
			</li>

			<li>
				<Icon icon="devicon:ionic" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Ionic / Cordova
			</li>
			<li>
				<Icon icon="devicon:angular" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Angular
			</li>
			<li>
				<Icon icon="logos:nativescript" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Native script
			</li>
		</ul>
	</div>

	<div class="skill-set">
		<h2 id="cloud">Cloud</h2>
		<ul>
			<li><Icon icon="logos:aws" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />AWS</li>
			<li>
				<Icon icon="carbon:cloud-foundry-2" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> PCF
			</li>
			<li>
				<Icon icon="devicon:openshift" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />OpenShift
			</li>
		</ul>
	</div>

	<div class="skill-set">
		<h1 id="tools-">Tools:</h1>
		<ul>
			<li><Icon icon="devicon:git" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />GIT</li>
			<li><Icon icon="devicon:svn" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />SVN</li>

			<li><Icon icon="fa6-brands:jira" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Jira</li>
			<li>
				<Icon icon="fa6-brands:confluence" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Confluence
			</li>
			<li>
				<Icon icon="skill-icons:vite-light" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Vite
			</li>
			<li><Icon icon="devicon:grunt" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Grunt</li>
			<li><Icon icon="devicon:webpack" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Webpack</li>
			<li><Icon icon="devicon:gradle" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Gradle</li>
			<li><Icon icon="logos:maven" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Maven</li>
			<li><Icon icon="devicon:npm" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />NPM</li>
			<li><Icon icon="devicon:yarn" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Yarn</li>
		</ul>
	</div>

	<div class="skill-set">
		<h3>Automatisation</h3>
		<ul>
			<li>
				<Icon icon="tabler:brand-ansible" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Ansible
			</li>
			<li>
				<Icon icon="devicon:terraform" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Terraform
			</li>
		</ul>
	</div>

	<div class="skill-set">
		<h3>CI/CD</h3>
		<ul>
			<li><Icon icon="logos:jenkins" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Jenkins</li>
			<li><Icon icon="logos:gitlab" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Gitlab CI</li>
			<li>
				<Icon icon="logos:github" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Github Action
			</li>
		</ul>
	</div>

	<div class="skill-set">
		<h3>TEST</h3>
		<ul>
			<li>
				<Icon icon="skill-icons:selenium" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Selenium
			</li>
			<li>
				<Icon
					icon="vscode-icons:file-type-cucumber"
					class="inline-flex w-6 h-6 pr-1 first:-mt-1"
				/>Cucumber
			</li>
			<li><Icon icon="devicon:junit" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />JUnit</li>
			<li>
				<Icon icon="logos:protractor" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Protractor
			</li>
			<li><Icon icon="skill-icons:jest" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Jest</li>
			<li><Icon icon="devicon:vitest" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Vitest</li>
		</ul>
	</div>

	<div class="skill-set">
		<h3>Operationen</h3>
		<ul>
			<li><Icon icon="logos:nginx" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />NGINX</li>
			<li>
				<Icon icon="mdi:linux" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Linux System
				Administration
			</li>
			<li>
				<Icon icon="mdi:kubernetes" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Kubernetes
			</li>
			<li><Icon icon="mdi:docker" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Docker</li>
		</ul>
	</div>

	<div class="skill-set">
		<h2 id="process-and-methodology">Process and methodology</h2>
		<ul>
			<li>Scrum, Kanban, V-Model, Waterfall</li>
			<li>Test Driven Development (TDD)</li>
			<li>Domain Driven Development (DDD)</li>
			<li>Offline first / Progressive web application</li>
			<li>Ui Component test and documentation with Storybook</li>
			<li>Microservices</li>
			<li>Micro-frontend, Module Federation with Webpack</li>
			<li>Custom components, Web-Elements</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	h2 {
		@apply text-gray-600 uppercase font-semibold tracking-wider mb-1 mt-4;
	}
	.skill-set {
		@apply bg-white rounded-lg border border-gray-500 text-center flex-1 my-3;
	}
</style>
