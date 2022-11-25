import MyButton from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
	title: "Example/Button",
	component: MyButton,
	tags: ["docsPage"],
	argTypes: {
		backgroundColor: {
			control: "color",
		},
		onClick: {},
		size: {
			control: {
				type: "select",
			},
			options: ["small", "medium", "large"],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Primary = {
	args: {
		primary: true,
		label: "Button",
	},
};

export const Secondary = {
	args: {
		label: "Button",
	},
};

export const Large = {
	args: {
		size: "large",
		label: "Button",
	},
};

export const Small = {
	args: {
		size: "small",
		label: "Button",
	},
};
