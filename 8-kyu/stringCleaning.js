//* Higher Order Function
// function stringClean(s) {
//   return [...s].filter((n) => n != +n).join("");
// }

//* Regex
function stringClean(s) {
  return s.replace(/\d/g, "");

  // return s.replace(/[0-9]/g, "");
}

console.log(`Answer: ${stringClean("")}`, "Result: ");
console.log(`Answer: ${stringClean("! !")}`, "Result: ! !");
console.log(`Answer: ${stringClean("123456789")}`, "Result: ");
console.log(`Answer: ${stringClean("(E3at m2e2!!)")}`, "Result: (Eat me!!)");
console.log(`Answer: ${stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")}`, "Result: Dsa cdsc csa!!! I Am cool!");
console.log(`Answer: ${stringClean("A1 A1! AAA   3J4K5L@!!!")}`, "Result: A A! AAA   JKL@!!!");
console.log(`Answer: ${stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@")}`, "Result: Adgre Asad! AAA fvfdvJKL@");
console.log(`Answer: ${stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ")}`, "Result: Addsadds A  $$sad! AAAe fKL@ ");
console.log(`Answer: ${stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ")}`, "Result: Addsadds A  $$sa!d! A!A!Ae$ f## ");
console.log(`Answer: ${stringClean('My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?')}`, 'Result: My "messy" data issues! Will they ever, ever be solved?');
console.log(`Answer: ${stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")}`, "Result: Why can't we buy the good software? #cheapskates");
