const nullAble = (res: null | string) => {
	if (res === null) {
		console.log("There are nothing to  say!");
	} else {
		console.log("Searching...");
	}
};

// nullAble("sdlfjsld");

// unknown

const getCarSpreed = (speed: unknown) => {
	if (typeof speed === "number") {
		const convertSpreed = (speed * 10000) / 3600;
		console.log(convertSpreed);
	}
	if (typeof speed === "string") {
		const [value, scale] = speed.split(" ");
		const convertSpreed = (parseFloat(value) * 10000) / 3600;
		console.log(convertSpreed);
	} else {
		console.log("There is wrong type.");
	}
};

// getCarSpreed(10);
// getCarSpreed("10 km/h");
// getCarSpreed(true);

// never
function throwError(message: string) {
	throw new Error(message);
}

// console.log("efas;ldfkjsafdksadjl;fjasdldlfkjsldfjasddl");
