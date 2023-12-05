
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
	export const ZPLUG_LOG_LOAD_FAILURE: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const ANDROID_HOME: string;
	export const TERM: string;
	export const SHELL: string;
	export const ZPLUG_LOADFILE: string;
	export const npm_config_metrics_registry: string;
	export const ZPLUG_LOG_LOAD_SUCCESS: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const forgit_clean: string;
	export const forgit_rebase: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WINDOWID: string;
	export const FPATH: string;
	export const forgit_revert_commit: string;
	export const forgit_reset_head: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const forgit_add: string;
	export const ZSH: string;
	export const PNPM_HOME: string;
	export const forgit_ignore: string;
	export const NVM_DIR: string;
	export const ZSH_TMUX_TERM: string;
	export const ZPLUG_USE_CACHE: string;
	export const USER: string;
	export const ZPLUG_ERROR_LOG: string;
	export const forgit_checkout_file: string;
	export const COMMAND_MODE: string;
	export const ALACRITTY_SOCKET: string;
	export const npm_config_globalconfig: string;
	export const npm_config_always_auth: string;
	export const _ZSH_TMUX_FIXED_CONFIG: string;
	export const ZPLUG_PROTOCOL: string;
	export const SSH_AUTH_SOCK: string;
	export const ALACRITTY_LOG: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const ZSH_TMUX_CONFIG: string;
	export const forgit_checkout_commit: string;
	export const _ZPLUG_VERSION: string;
	export const _ZPLUG_PREZTO: string;
	export const TMUX: string;
	export const PERIOD: string;
	export const _ZPLUG_AWKPATH: string;
	export const forgit_checkout_branch: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const forgit_diff: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const forgit_branch_delete: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const XPC_FLAGS: string;
	export const TMUX_PANE: string;
	export const _ZPLUG_OHMYZSH: string;
	export const ZPLUG_BIN: string;
	export const _ZPLUG_URL: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const forgit_cherry_pick: string;
	export const XPC_SERVICE_NAME: string;
	export const ZPLUG_CACHE_DIR: string;
	export const SHLVL: string;
	export const HOME: string;
	export const forgit_checkout_tag: string;
	export const ZPLUG_THREADS: string;
	export const ZSH_CACHE_DIR: string;
	export const ZPLUG_REPOS: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const LC_CTYPE: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const NVM_BIN: string;
	export const forgit_stash_show: string;
	export const forgit_blame: string;
	export const ZPLUG_FILTER: string;
	export const npm_config_user_agent: string;
	export const forgit_stash_push: string;
	export const ZPLUG_HOME: string;
	export const forgit_log: string;
	export const forgit_fixup: string;
	export const ZPLUG_ROOT: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
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
		ZPLUG_LOG_LOAD_FAILURE: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		ANDROID_HOME: string;
		TERM: string;
		SHELL: string;
		ZPLUG_LOADFILE: string;
		npm_config_metrics_registry: string;
		ZPLUG_LOG_LOAD_SUCCESS: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		forgit_clean: string;
		forgit_rebase: string;
		TERM_PROGRAM_VERSION: string;
		WINDOWID: string;
		FPATH: string;
		forgit_revert_commit: string;
		forgit_reset_head: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		forgit_add: string;
		ZSH: string;
		PNPM_HOME: string;
		forgit_ignore: string;
		NVM_DIR: string;
		ZSH_TMUX_TERM: string;
		ZPLUG_USE_CACHE: string;
		USER: string;
		ZPLUG_ERROR_LOG: string;
		forgit_checkout_file: string;
		COMMAND_MODE: string;
		ALACRITTY_SOCKET: string;
		npm_config_globalconfig: string;
		npm_config_always_auth: string;
		_ZSH_TMUX_FIXED_CONFIG: string;
		ZPLUG_PROTOCOL: string;
		SSH_AUTH_SOCK: string;
		ALACRITTY_LOG: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		ZSH_TMUX_CONFIG: string;
		forgit_checkout_commit: string;
		_ZPLUG_VERSION: string;
		_ZPLUG_PREZTO: string;
		TMUX: string;
		PERIOD: string;
		_ZPLUG_AWKPATH: string;
		forgit_checkout_branch: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		forgit_diff: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		forgit_branch_delete: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		XPC_FLAGS: string;
		TMUX_PANE: string;
		_ZPLUG_OHMYZSH: string;
		ZPLUG_BIN: string;
		_ZPLUG_URL: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		forgit_cherry_pick: string;
		XPC_SERVICE_NAME: string;
		ZPLUG_CACHE_DIR: string;
		SHLVL: string;
		HOME: string;
		forgit_checkout_tag: string;
		ZPLUG_THREADS: string;
		ZSH_CACHE_DIR: string;
		ZPLUG_REPOS: string;
		npm_config_cache: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		ALACRITTY_WINDOW_ID: string;
		LC_CTYPE: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		NVM_BIN: string;
		forgit_stash_show: string;
		forgit_blame: string;
		ZPLUG_FILTER: string;
		npm_config_user_agent: string;
		forgit_stash_push: string;
		ZPLUG_HOME: string;
		forgit_log: string;
		forgit_fixup: string;
		ZPLUG_ROOT: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
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
