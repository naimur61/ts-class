type a1 = null;
type a3 = undefined;
type a4 = string;

type a2 = a1 extends string ? string : null;

//  nested
type d = a1 extends null ? null : a3 extends undefined ? undefined : a4 extends number ? number : never;

type Sheikh = {
	weife1: string;
	weife2: string;
};

type checkProperty<T, p> = T extends p ? true : false;

type checkWife = checkProperty<Sheikh, { weife3: string }>;

// Second Style
type checkProperty1<T, K> = K extends keyof T ? true : false;

type checkWife1 = checkProperty1<Sheikh, "weife1">;
