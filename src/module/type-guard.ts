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
// console.log(getInfo(normal1));

const normal2: constructorUser = { name: "Robert Downy Junior", role: "constructor" };
// console.log(getInfo(normal2));

const normal3: adminUser = { name: "Naimur", role: "admin" };
// console.log(getInfo(normal3));

// instanceof Guard

class Animals {
	name: string;
	species: string;
	constructor(name: string, species: string) {
		this.name = name;
		this.species = species;
	}
	makeSound() {
		console.log("I am making sound.");
	}
}

class Dog extends Animals {
	constructor(name: string, species: string) {
		super(name, species);
	}
	makeBark() {
		console.log("I am barking");
	}
}

class Cat extends Animals {
	constructor(name: string, species: string) {
		super(name, species);
	}
	makeMeaw() {
		console.log("I am Meawing");
	}
}

class Bird extends Animals {
	constructor(name: string, species: string) {
		super(name, species);
	}
	makeCuckoo() {
		console.log("I am cuckooing");
	}
}

function isBird(animal: Animals): animal is Bird {
	return animal instanceof Bird;
}

function getAnimal(animal: Animals) {
	if (animal instanceof Dog) {
		animal.makeBark();
	} else if (animal instanceof Cat) {
		animal.makeMeaw();
	} else if (isBird(animal)) {
		animal.makeCuckoo();
	} else {
		animal.makeSound();
	}
}

const animal1 = new Dog("Charlie", "Dog");
const animal2 = new Cat("Jarry", "Cat");
const animal3 = new Bird("Kiwi", "Bird");

getAnimal(animal3);
