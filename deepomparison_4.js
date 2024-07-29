function compareObjects(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  let areBothObjectsEqual = true;

  obj1Keys.forEach(obj1Key => {
    const obj1Value = obj1[obj1Key];
    const obj2Value = obj2[obj1Key];

    if (obj1Value === 'null' || obj2Value === 'null') {
      return obj1Value === obj2Value;
    } else if (typeof obj1Value !== typeof obj2Value) {
      areBothObjectsEqual = false;
    } else if (typeof obj1Value !== 'object') {
      return obj1Value === obj2Value;
    } else if (typeof obj1Value === 'object') {
      areBothObjectsEqual = compareObjects(obj1Value, obj2Value);
    }
  });

  return areBothObjectsEqual;
}

function deepEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    return compareObjects(obj1, obj2);
  }
}

let obj = { here: { is: 'an' }, object: 2 };

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
