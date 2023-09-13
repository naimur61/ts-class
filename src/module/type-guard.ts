type AlphaNumeric = string | number;
function add(params1: AlphaNumeric, params2: AlphaNumeric): AlphaNumeric {
	if (typeof params1 === "number" && typeof params2 === "number") {
		return params1 + params2;
	} else {
		return params1.toString() + params2.toString();
	}
}

// console.log(add(2, 4));
// console.log(add("Nai", "mur"));

// Guard

type normalUser = { name: string };
type adminUser = { name: string; role: "admin" };
type constructorUser = { name: string; role: "constructor" };

function getInfo(user: normalUser | adminUser | constructorUser): string {
	if ("role" in user) {
		if (user.role === "admin") {
			return `Hey!, I am ${user?.name} and my role is ${user?.role}. I am the owner of this function.`;
		} else {
			return `I am ${user?.name} and my role is ${user?.role}`;
		}
	} else {
		return `My name is ${user?.name} and I'm a normal user.`;
	}
}

const normal1: normalUser = { name: "Chris Hemsowrth" };
console.log(getInfo(normal1));

const normal2: constructorUser = { name: "Robert Downy Junior", role: "constructor" };
console.log(getInfo(normal2));

const normal3: adminUser = { name: "Naimur", role: "admin" };
console.log(getInfo(normal3));

const normal4: constructorUser = { name: "Tom Holand", role: "constructor" };
console.log(getInfo(normal4));
