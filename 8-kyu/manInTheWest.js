const checkTheBucket = (bucket) => bucket.includes("gold");

const checkTheBucket = (bucket) => bucket.indexOf("gold") != -1;

const checkTheBucket = (bucket) => bucket.some((e) => e === "gold");

const checkTheBucket = (bucket) => (bucket.find((v) => v === "gold") ? true : false);

const checkTheBucket = (bucket) => bucket.filter((i) => i === "gold").length > 0;

const checkTheBucket = (bucket) => /gold/.test(bucket);

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]), true);
console.log(checkTheBucket([]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true);
