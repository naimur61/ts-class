const makePromise = (): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		const data: string = "Data is fetched.";
		if (data) {
			resolve(data);
		} else {
			reject("Data fetching failed!");
		}
	});
};

const result1 = makePromise();
// console.log(result1);

interface IToDo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

// const getToDo = async (): Promise<IToDo> => {
// 	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// 	return await res.json();
// };

const getToDo = async (): Promise<IToDo> => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	if (!res.ok) {
		throw new Error(`HTTP Error: ${res.status}`);
	}
	return await res.json();
};

const getToDoData = async (): Promise<void> => {
	try {
		const data = await getToDo();
		console.log(data);
	} catch (error) {
		console.error("Error:", error);
	}
};

getToDoData();
