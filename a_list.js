let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

let list2 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

function arrayToList(array) {
  let list = {};
  let currentInsideList = list;

  function addNestingToListAtPath(arrayIndex) {
    if (arrayIndex === array.length) return;

    currentInsideList.value = array[arrayIndex];

    if (arrayIndex === array.length - 1) {
      currentInsideList.rest = null;
    } else {
      currentInsideList.rest = {};
      currentInsideList = currentInsideList.rest;
    }

    addNestingToListAtPath(arrayIndex + 1);
  }

  addNestingToListAtPath(0);

  return list;
}

function listToArray(list) {
  const array = [];
  function extractValueFromList(list) {
    if (!list) return;

    array.push(list.value);
    list = list.rest;

    extractValueFromList(list);
  }

  extractValueFromList(list);

  return array;
}

function prepend(newElement, list) {
  if (!list) {
    return { value: newElement, rest: null };
  }

  return { value: newElement, rest: list };
}

function nth(list, depth) {
  function findElementAtDepth(list, currentLevel) {
    if (currentLevel === depth) {
      return list.value;
    }

    list = list.rest;
    return findElementAtDepth(list, currentLevel + 1);
  }

  return findElementAtDepth(list, 0);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
