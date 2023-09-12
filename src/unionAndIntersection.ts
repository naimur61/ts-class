type junior = {
	name: string;
	skill: string;
};

type experience = junior & {
	experience: number;
	level: "junior" | "mid" | "senior";
};

type next = junior &
	experience & {
		leadership: boolean;
	};

const applicant1: junior = {
	name: "minhaz",
	skill: "js, react, node,",
};

const applicant2: experience = {
	name: "Naimur",
	skill: "js, ts, react, next, mongo",
	experience: 3,
	level: "junior",
};

const applicant3: next = {
	name: "hridoy",
	skill: "js, ts, react, next, NoSQL, SQL",
	experience: 3,
	leadership: true,
	level: "mid",
};
