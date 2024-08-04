let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

class Rabbit {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  speak(line) {
    console.log(
      `The ${this.type} rabbit says '${line}'. Color is ${this.color}`
    );
  }
}

let killerRabbit = new Rabbit('killer');

console.log(Object.getPrototypeOf(Rabbit));
console.log(Rabbit.prototype);
console.log(killerRabbit.prototype);
console.log(Object.getPrototypeOf(killerRabbit));
console.log('here', Object.getPrototypeOf(killerRabbit) === Rabbit.prototype);

console.log(Object.getPrototypeOf(function x() {}));
console.log(
  Object.getPrototypeOf(Rabbit) === Object.getPrototypeOf(function x() {})
);
console.log(Rabbit.prototype === Function.prototype);
console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(killerRabbit) === Rabbit.prototype);
