const isOpposite = (s1, s2) => (!s1 || !s2 ? false : s1 === s2.replace(/[a-z]/gi, (c) => (c < "a" ? c.toLowerCase() : c.toUpperCase())));

const isOpposite = (s1, s2) =>
  s1
    .split("")
    .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join("") === s2 && s1 !== "";

const isOpposite = (s1, s2) => s1 != "" && s1 == s2.replace(/./g, (ch) => ch["to" + (ch <= "Z" ? "Lower" : "Upper") + "Case"]());

console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);
