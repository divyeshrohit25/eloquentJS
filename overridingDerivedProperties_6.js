class Rabbit {
  teeth = 'divyesh';

  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

Rabbit.prototype.teeth = 'small';
console.log('1', Rabbit.prototype.teeth);

let killerRabbit = new Rabbit('killer');

console.log('2', killerRabbit.teeth);

killerRabbit.teeth = 'long, sharp, and bloody';
console.log('3', killerRabbit.teeth);

console.log('4', new Rabbit('basic').teeth);

console.log('5', Rabbit.prototype.teeth);

console.log('6', Rabbit.prototype);

console.log('7', Object.getPrototypeOf(killerRabbit).teeth);

console.log('7', killerRabbit.teeth);


