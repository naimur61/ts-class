type User = {
	name: string;
	age: number;
};

interface IUser {
	name: string;
	age: number;
}

interface extendUser extends IUser {
	role: string;
}
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
	obj[key];
}

const result = getProperty({ name: "Mr. X", age: 20 }, "age");

type PersonType = {
	name: string;
	age: number;
	address: string;
};
type newType = keyof PersonType;
const b: newType = "address";

type news = "name" | "age" | "address";
const a: news = "address";
