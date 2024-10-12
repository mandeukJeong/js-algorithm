function isShallowEqual(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

function solution(want, number, discount) {
  const wantObj = {};

  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const discount10d = {};

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
      }
    }

    if (isShallowEqual(discount10d, wantObj)) {
      answer += 1;
    }
  }

  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
