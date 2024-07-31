function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function textScripts(text) {
  return countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : 'none';
  }).filter(({ name }) => name !== 'none');
}

function dominantDirection(text) {
  const scripts = textScripts(text);
  const mostUsedScriptName = scripts.reduce(
    (currentScriptAndCount, newScriptAndCount) => {
      // console.log('script and count', currentScriptAndCount, newScriptAndCount);
      if (newScriptAndCount.count > currentScriptAndCount.count) {
        return newScriptAndCount;
      } else return currentScriptAndCount.name;
    }
  );

  let script;

  Object.values(SCRIPTS).forEach(value => {
    if (mostUsedScriptName.name === value.name) {
      script = value;
    }
  });
  return script.direction;
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
