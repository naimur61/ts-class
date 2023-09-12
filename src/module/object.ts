class Animal {
	name: string;
	species: string;
	sound: string;

	constructor(name: string, species: string, sound: string) {
		this.name = name;
		this.sound = sound;
		this.species = species;
	}

	makeSound() {
		console.log(`The ${this.name} says ${this.sound}`);
	}
}

const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
dog.makeSound();
