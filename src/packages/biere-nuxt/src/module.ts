import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

import { name, version } from "../package.json";
import { BiereOptions } from "./types";

const configKey: string = "biere";

export default defineNuxtModule<BiereOptions>({
	meta: {
		name,
		version,
		configKey,
	},
	defaults: <BiereOptions>{
		addPlugin: true,
	},
	setup(options, nuxt) {
		if (options.addPlugin) {
			const { resolve } = createResolver(import.meta.url);
			const runtimeDir = fileURLToPath(
				new URL("./runtime", import.meta.url)
			);
			nuxt.options.build.transpile.push(runtimeDir);
			addPlugin(resolve(runtimeDir, "plugin"));
		}
	},
});
