const names: string[] = ["abul", "kabul", "khalil"];
const rollNumbers: number[] = [2, 3, 5, 6, 44];
// console.log(rollNumbers);

const friends: string[] = ["abul", "kabul", "babul"];
const newFriends: string[] = ["ku", "aru", "ciru"];

friends.push(...newFriends);
// console.log(friends);

const greetFriends = (...friends: string[]): void => {
	friends.map((f) => console.log(`Hello ${f}`));
};

greetFriends("naimur", "mridha", "md", "slf", "sdal");
