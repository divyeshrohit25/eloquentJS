let finder = {
  find(array) {
    console.log('find', this.value);
    return array.some(v => v === this.value);
  },
  find2: function (array) {
    console.log('find2', this.value);

    function innerFind1() {
      console.log('innerFind1', this.value);
    }

    const innerFind2 = () => {
      console.log('innerFind2', this.value);
    };

    innerFind1.call({ value: 6 });
    innerFind2.call({ value: 6 });

    return array.some(value => {
      return value === this.value;
    });
  },
  find3: array => {
    console.log('find3', this.value);
    return array.some(value => {
      return value === this.value;
    });
  },
  find4(array) {
    console.log('find4', this.value);
    return array.some(function (value) {
      return value === this.value;
    });
  },
  value: 5,
};

console.log(finder.find([4, 5]));
console.log(finder.find.call({ value: 7 }, [4, 5]));
console.log(finder.find2([4, 5]));
console.log(finder.find3([4, 5]));
console.log(finder.find4([4, 5]));
