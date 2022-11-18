import { defineNuxtConfig } from "nuxt/config";
import MyModule from "..";

export default defineNuxtConfig({
	modules: [MyModule],

	typescript: {
		strict: true,
	},

	biere: {
		addPlugin: true,
	},
});
