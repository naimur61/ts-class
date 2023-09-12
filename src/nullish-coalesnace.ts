const user = null;
const res = user ?? "guest";
const res2 = user ? user : "guest";
console.log({ res }, { res2 });

console.log(user ?? "No User");
