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
		"prettier",
	],
	plugins: [
		//
		"@typescript-eslint",
		"prettier",
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		"vue/no-multiple-template-root": "off",
	},
};
