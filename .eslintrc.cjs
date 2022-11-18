module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	extends: [
		//
		"eslint:recommended",
		"plugin:vue/strongly-recommended",
		"plugin:vue/vue3-recommended",
		"@nuxtjs/eslint-config-typescript",
		"prettier",
		"plugin:ssr-friendly/recommended",
	],
	plugins: [
		//
		"@typescript-eslint",
		"ssr-friendly",
		"prettier",
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		"vue/no-multiple-template-root": "off",

		// allow console and debugger on development
		"no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
	},
};
