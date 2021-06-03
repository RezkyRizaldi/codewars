// function Sleigh() {
//   this.name = "Santa Claus";
//   this.password = "Ho Ho Ho!";
// }

// Sleigh.prototype.authenticate = function (name, password) {
//   return this.name === name && this.password === password;
// };

class Sleigh {
  authenticate(name, password) {
    return name === "Santa Claus" && password === "Ho Ho Ho!";
  }
}

var sleigh = new Sleigh();

var testCredentials = function (name, password, correct) {
  console.log(sleigh.authenticate(name, password), correct, `Tested name ${name} and password ${password}`);
};

testCredentials("Santa Claus", "Ho Ho Ho!", true);
testCredentials("Santa", "Ho Ho Ho!", false);
testCredentials("Santa Claus", "Ho Ho!", false);
testCredentials("jhoffner", "CodeWars", false);
