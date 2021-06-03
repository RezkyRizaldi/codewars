class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}

function Human(name) {
  this.name = name;
}

function Man() {
  Human.call(this);
}
Man.prototype = Object.create(Human.prototype);

function Woman() {
  Human.call(this);
}
Woman.prototype = Object.create(Human.prototype);

let humans = God.create();
console.log(humans[0] instanceof Man, true, "Expected Adam to be a Man");
