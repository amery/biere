import { defineNuxtConfig } from "nuxt/config";
import MyModule from "..";

export default defineNuxtConfig({
	modules: [MyModule],

	biere: {
		addPlugin: true,
	},
});
