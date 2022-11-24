import { defineBuildConfig } from "unbuild";
import { resolve } from "pathe";

import scss from "rollup-plugin-scss";

export default defineBuildConfig({
	entries: [
		{
			builder: "rollup",
			input: "./src/scss/biere.scss",
		},
	],

	hooks: {
		"rollup:options"(_ctx, options) {
			const plugin = scss({
				fileName: "biere.css",
				includePaths: [resolve(__dirname, "node_modules")],
			});

			if (options.plugins === undefined) {
				options.plugins = [plugin];
			} else if (Array.isArray(options.plugins)) {
				options.plugins.push(plugin);
			} else {
				options.plugins = [options.plugins, plugin];
			}
		},
	},
});
