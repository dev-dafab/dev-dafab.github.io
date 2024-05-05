
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_i18next_http_backend: string;
	export const NIX_PROFILES: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const ANDROID_HOME: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_config_version_git_tag: string;
	export const npm_config____registry: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const RIPGREP_CONFIG_PATH: string;
	export const TMPDIR: string;
	export const npm_package_devDependencies_vite_plugin_tailwind_purgecss: string;
	export const GRADLE_HOME: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WINDOWID: string;
	export const npm_package_scripts_dev: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const LC_ALL: string;
	export const PNPM_HOME: string;
	export const ZSH: string;
	export const npm_package_readmeFilename: string;
	export const NVM_DIR: string;
	export const PYTHONIOENCODING: string;
	export const USER: string;
	export const npm_package_description: string;
	export const LS_COLORS: string;
	export const npm_package_scripts_check_watch: string;
	export const ALACRITTY_SOCKET: string;
	export const COMMAND_MODE: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_config_always_auth: string;
	export const ALACRITTY_LOG: string;
	export const NODE_REPL_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_eslint: string;
	export const JAVA_HOME_BIN: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const TMUX: string;
	export const npm_package_devDependencies_sveltekit_i18n: string;
	export const npm_config____init_licensel: string;
	export const LSCOLORS: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const MAVEN_HOME: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const npm_config_____dev_dafab_registry: string;
	export const JAVA_HOME_DIR: string;
	export const LaunchInstanceID: string;
	export const _: string;
	export const npm_package_devDependencies_i18next_browser_languagedetector: string;
	export const __CFBundleIdentifier: string;
	export const npm_package_devDependencies__skeletonlabs_tw_plugin: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const JAVA_HOME: string;
	export const npm_package_scripts_preview: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const FDS_REPO_DIR: string;
	export const LANG: string;
	export const npm_package_devDependencies__skeletonlabs_skeleton: string;
	export const npm_package_name: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const TMUX_PANE: string;
	export const XPC_FLAGS: string;
	export const npm_package_devDependencies_vitest: string;
	export const NIX_SSL_CERT_FILE: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const npm_config_bin_links: string;
	export const npm_package_devDependencies_i18next: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_daisyui: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const npm_package_scripts_test: string;
	export const npm_config____init_private: string;
	export const ZSH_CUSTOM: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_version_git_message: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_scripts_format: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const SDKMAN_DIR: string;
	export const npm_lifecycle_script: string;
	export const LC_CTYPE: string;
	export const XDG_DATA_DIRS: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const NVM_BIN: string;
	export const npm_package_devDependencies__iconify_svelte: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const SECURITYSESSIONID: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_i18next_http_backend: string;
		NIX_PROFILES: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NODE: string;
		INIT_CWD: string;
		ANDROID_HOME: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_config_version_git_tag: string;
		npm_config____registry: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		RIPGREP_CONFIG_PATH: string;
		TMPDIR: string;
		npm_package_devDependencies_vite_plugin_tailwind_purgecss: string;
		GRADLE_HOME: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		WINDOWID: string;
		npm_package_scripts_dev: string;
		SDKMAN_PLATFORM: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_registry: string;
		LC_ALL: string;
		PNPM_HOME: string;
		ZSH: string;
		npm_package_readmeFilename: string;
		NVM_DIR: string;
		PYTHONIOENCODING: string;
		USER: string;
		npm_package_description: string;
		LS_COLORS: string;
		npm_package_scripts_check_watch: string;
		ALACRITTY_SOCKET: string;
		COMMAND_MODE: string;
		SDKMAN_CANDIDATES_API: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_config_always_auth: string;
		ALACRITTY_LOG: string;
		NODE_REPL_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_eslint: string;
		JAVA_HOME_BIN: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		TMUX: string;
		npm_package_devDependencies_sveltekit_i18n: string;
		npm_config____init_licensel: string;
		LSCOLORS: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		MAVEN_HOME: string;
		PATH: string;
		npm_config_argv: string;
		npm_config_____dev_dafab_registry: string;
		JAVA_HOME_DIR: string;
		LaunchInstanceID: string;
		_: string;
		npm_package_devDependencies_i18next_browser_languagedetector: string;
		__CFBundleIdentifier: string;
		npm_package_devDependencies__skeletonlabs_tw_plugin: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		JAVA_HOME: string;
		npm_package_scripts_preview: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		FDS_REPO_DIR: string;
		LANG: string;
		npm_package_devDependencies__skeletonlabs_skeleton: string;
		npm_package_name: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		TMUX_PANE: string;
		XPC_FLAGS: string;
		npm_package_devDependencies_vitest: string;
		NIX_SSL_CERT_FILE: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		npm_config_bin_links: string;
		npm_package_devDependencies_i18next: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_daisyui: string;
		npm_package_devDependencies_autoprefixer: string;
		HOME: string;
		SHLVL: string;
		npm_package_type: string;
		npm_package_scripts_test: string;
		npm_config____init_private: string;
		ZSH_CUSTOM: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_version_git_message: string;
		LESS: string;
		LOGNAME: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_scripts_format: string;
		ALACRITTY_WINDOW_ID: string;
		SDKMAN_DIR: string;
		npm_lifecycle_script: string;
		LC_CTYPE: string;
		XDG_DATA_DIRS: string;
		FZF_DEFAULT_COMMAND: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		NVM_BIN: string;
		npm_package_devDependencies__iconify_svelte: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		SDKMAN_CANDIDATES_DIR: string;
		npm_package_devDependencies__types_node: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		SECURITYSESSIONID: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
