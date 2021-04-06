function greet(language) {
  //* Object Literal
  // return database[language] || database["english"];

  //* Ternary for..in
  return language in database ? database[language] : database.english;
}

let database = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

console.log(greet("english"), "Welcome", "Your function should have returned 'Welcome'. Try again.");
console.log(greet("dutch"), "Welkom", "Your function should have returned 'Welkom'. Try again.");
console.log(greet("IP_ADDRESS_INVALID"), "Welcome", "Your function should have returned 'Welcome'. Try again.");
