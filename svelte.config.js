import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify';
import firebase from "svelte-adapter-firebase";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: firebase(), // currently the adapter does not take any options
		
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
