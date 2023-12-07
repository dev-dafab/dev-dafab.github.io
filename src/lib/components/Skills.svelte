<script>
	import Icon from '@iconify/svelte';
</script>

<hr class="my-6 border-t border-gray-300" />

<div class="flex flex-col">
	<span class="text-gray-600 uppercase font-bold tracking-wider mb-2">Skills</span>

	<ul class="flex flex-wrap">
		<li class="bg-white rounded-lg border border-gray-500 text-center flex-1">
			<h3>Database:</h3>
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
		</li>
	</ul>
	<h2 id="programming-languages">Programming languages</h2>
	<ul>
		<li>
			Frontend
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
				<li><Icon icon="skill-icons:html" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />HTML</li>
				<li><Icon icon="skill-icons:css" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />CSS</li>
			</ul>
		</li>
		<li>
			Backend
			<ul>
				<li>
					<Icon icon="skill-icons:java-light" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Java
				</li>
				<li><Icon icon="devicon:nodejs" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Nodejs</li>
			</ul>
		</li>
		<li>
			Low Level
			<ul>
				<li><Icon icon="skill-icons:c" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />C/C++</li>
			</ul>
		</li>
	</ul>
	<h2 id="frameworks">Frameworks</h2>
	<ul>
		<li>
			Applications
			<ul>
				<li><Icon icon="devicon:qt" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> QT/QML</li>
			</ul>
		</li>
		<li>
			Backend
			<ul>
				<li>
					<Icon icon="simple-icons:springboot" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Spring
					boot
				</li>
				<li>
					<Icon
						icon="skill-icons:expressjs-dark"
						class="inline-flex w-6 h-6 pr-1 first:-mt-1"
					/>ExpressJS
				</li>
				<li><Icon icon="logos:nestjs" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> NestJS</li>
			</ul>
		</li>
		<li>
			Frontend
			<ul>
				<li>
					<Icon
						icon="vscode-icons:file-type-angular"
						class="inline-flex w-6 h-6 pr-1 -mt-1 bg-white"
					/> Angular
				</li>
				<li><Icon icon="devicon:react" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> React</li>
				<li>
					<Icon icon="devicon:svelte" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Svelte/Sveltekit
				</li>
			</ul>
		</li>
		<li>
			Hybrid/Mobile
			<ul>
				<li><Icon icon="devicon:ionic" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Ionic</li>
				<li><Icon icon="logos:cordova" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Cordova</li>
				<li>
					<Icon icon="devicon:angular" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Angular
				</li>
				<li>
					<Icon icon="tabler:brand-react-native" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> React
					Native
				</li>
				<li>
					<Icon icon="logos:nativescript" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Native script
				</li>
			</ul>
		</li>
	</ul>
	<h2 id="cloud">Cloud</h2>
	<ul>
		<li>
			Providers:
			<ul>
				<li><Icon icon="logos:aws" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Amazon AWS</li>
				<li>
					<Icon icon="carbon:cloud-foundry-2" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> Pivotal
					Cloud Foundry (PCF)
				</li>
				<li>
					<Icon icon="carbon:cloud-foundry-2" class="inline-flex w-6 h-6 pr-1 first:-mt-1" /> SAP Cloud
					Foundry
				</li>
				<li>
					<Icon icon="devicon:openshift" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />OpenShift
				</li>
			</ul>
		</li>
	</ul>
	<h1 id="tools-">Tools:</h1>
	<ul>
		<li>
			Versioning
			<ul>
				<li><Icon icon="devicon:git" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />GIT</li>
				<li><Icon icon="devicon:svn" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />SVN</li>
			</ul>
		</li>
		<li>
			Tickets and documentation
			<ul>
				<li><Icon icon="fa6-brands:jira" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Jira</li>
				<li>
					<Icon
						icon="fa6-brands:confluence"
						class="inline-flex w-6 h-6 pr-1 first:-mt-1"
					/>Confluence
				</li>
				<li>
					<Icon icon="fa6-brands:trello" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Trello
				</li>
			</ul>
		</li>
		<li>
			Build Tools:
			<ul>
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
		</li>
		<li>
			Automatisation
			<ul>
				<li>
					<Icon icon="tabler:brand-ansible" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Ansible
				</li>
				<li>
					<Icon icon="devicon:terraform" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Terraform
				</li>
			</ul>
		</li>
		<li>
			Test
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
		</li>
		<li>
			CI/CD:
			<ul>
				<li><Icon icon="logos:jenkins" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Jenkins</li>
				<li><Icon icon="logos:gitlab" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Gitlab CI</li>
				<li>
					<Icon icon="logos:github" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />Github Action
				</li>
			</ul>
		</li>
		<li>
			Operationen
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
		</li>
	</ul>
	<h2 id="modelisations">Modelisations</h2>
	<ul>
		<li><Icon icon="simple-icons:uml" class="inline-flex w-6 h-6 pr-1 first:-mt-1" />UML</li>
		<li><span class="ml-6">ER model<span /></span></li>
	</ul>
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

<style lang="postcss">
	h2 {
		@apply text-gray-600 uppercase font-semibold tracking-wider mb-1 mt-4;
	}
	li {
		@apply ml-2;
	}
</style>
