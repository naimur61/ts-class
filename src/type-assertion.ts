let emni: any;
emni = "Next level web development.";

console.log((emni as string).length);
console.log(<string>emni.length);

function kgToGram(params: number | string): number | string | undefined {
	if (typeof params === "number") {
		const gm = params * 1000;
		return `The converted result is ${gm} gm.`;
	} else if (typeof params === "string") {
		const gm = parseFloat(params) * 1000;
		return `The converted result is ${gm} gm.`;
	}
}

console.log(kgToGram(25) as number);
console.log(kgToGram("88") as string);
console.log(<string>kgToGram("30"));
