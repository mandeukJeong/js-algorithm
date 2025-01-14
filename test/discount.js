function makeHash(discount) {
  const hashtable = [];

  for (let i = 0; i < discount.length - 9; i++) {
    const item = {};

    for (let j = 0; j < 10; j++) {
      if (item[discount[j + i]]) {
        item[discount[j + i]]++;
      } else {
        item[discount[j + i]] = 1;
      }
    }

    hashtable.push(item);
  }

  return hashtable;
}

function solution(want, number, discount) {
  const discountList = makeHash(discount);
  const buyList = {};
  let result = 0;

  for (let i = 0; i < want.length; i++) {
    buyList[want[i]] = number[i];
  }

  for (const list of discountList) {
    let flag = false;

    for (const key in buyList) {
      if (list[key] && list[key] >= buyList[key]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }

    if (flag) {
      result++;
    }
  }

  return result;
}
