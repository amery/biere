import {
	argbFromHex,
	themeFromImage,
	themeFromSourceColor,
	CustomColor as MaterialCustomColor,
	Theme as MaterialTheme,
} from "@material/material-color-utilities";

type HEX = `#${string}`;

const asARGB = (value: number | HEX): number => {
	if (typeof value === "number") {
		return value;
	}

	return argbFromHex(value);
};

export type { MaterialTheme, MaterialCustomColor };

export const useMaterialCustomColor = (
	name: string,
	value: number | HEX,
	blend = false
): MaterialCustomColor => {
	const v: number = asARGB(value);

	return {
		name,
		value: v,
		blend,
	};
};

export const useMaterialTheme = (
	source: number | HEX,
	customColors: MaterialCustomColor[] = []
): MaterialTheme => {
	const src: number = asARGB(source);

	return themeFromSourceColor(src, customColors);
};

export const useMaterialThemeFromImage = async (
	image: HTMLImageElement,
	customColors: MaterialCustomColor[] = []
): Promise<MaterialTheme> => {
	return await themeFromImage(image, customColors);
};
