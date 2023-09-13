// Parent Class

class Person {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	makeSleep(hour: number): string {
		return `${this.name} is sleep everyday ${hour} hours.`;
	}
}

// Class for student
class Students extends Person {
	constructor(name: string, age: number, address: string) {
		super(name, age, address);
	}
}

const student1 = new Students("Naimur", 22, "pabna");
console.log(student1.makeSleep(8));

// class for Teacher
class Teacher extends Person {
	designation: string;

	constructor(name: string, age: number, address: string, designation: string) {
		super(name, age, address);
		this.designation = designation;
	}

	takeClasses(classNo: number): string {
		return `${this.designation} ${this.name} everyday take ${classNo} class.`;
	}
}

const teacher1 = new Teacher("Jhankar Mahbub", 40, "chikago", "Professor");
console.log(teacher1.takeClasses(3));

const aa: string = "22";
const bb = aa.toString();
console.log(typeof bb);
