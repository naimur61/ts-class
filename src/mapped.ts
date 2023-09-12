const obj = {
	name: "naimur",
};

type Area<T> = {
	[key in keyof T]: T[key];
};

const area2: Area<{ height: number; width: number }> = {
	height: 200,
	width: 300,
};

const area1: { height: number; width: number } = {
	height: 200,
	width: 300,
};
