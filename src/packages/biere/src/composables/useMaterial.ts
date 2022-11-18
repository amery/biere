import {
	argbFromHex,
	themeFromImage,
	themeFromSourceColor,
	CustomColor as MaterialCustomColor,
	Theme as MaterialTheme,
} from "@material/material-color-utilities";

type HEX = `#${string}`;

export { MaterialTheme, MaterialCustomColor };

export const useMaterialCustomColor = (
	name: string,
	value: number | HEX,
	blend = false
): MaterialCustomColor => {
	let v: number;

	if (typeof value === "number") {
		v = value;
	} else {
		v = argbFromHex(value);
	}

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
	let src: number;

	if (typeof source === "number") {
		src = source;
	} else {
		src = argbFromHex(source);
	}

	return themeFromSourceColor(src, customColors);
};

export const useMaterialThemeFromImage = async (
	image: HTMLImageElement,
	customColors: MaterialCustomColor[] = []
): Promise<MaterialTheme> => {
	return await themeFromImage(image, customColors);
};
