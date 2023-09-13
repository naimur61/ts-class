class Animal {
	constructor(public name: string, public species: string, public sound: string) {}

	public makeSound() {
		console.log(`${this.name} says ${this.sound}`);
	}
}

const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal("Charlie", "cat", "mew mew");

dog.makeSound();
cat.makeSound();

class Animal1 {
	constructor(public name: string, public species: string, public sound: string) {}

	public makeSound() {
		console.log(`${this.name} says ${this.sound}`);
	}
}
const cow = new Animal1("Sonai", "Cow", "hamba hamba");
cow.makeSound();
