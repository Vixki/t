// №1
function computer(count) {
  let word = "компьютеров";
  let arr = ["2", "3", "4"];

  if (String(count).endsWith("1") && !String(count).endsWith("11")) {
    word = "компьютер";
  } else if (
    arr.some((el) => String(count).endsWith(el)) &&
    !arr.some((el) => String(count).endsWith(1 + el))
  ) {
    word = "компьютера";
  }
  return count + " " + word;
}
// 50 min

// №2 1h - 1h30min
function findCommonDivisors(arr) {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  const dividers = [];

  for (let i = 0; i < arr.length; i++) {
    let divid = primes.filter((number) => arr[i] % number == 0);
    dividers[i] = divid;
  }

  const comDividers = [];
  for (let i = 0; i < dividers[0].length; i++) {
    const isCommon = dividers.every((arr) => {
      return arr.includes(dividers[0][i]);
    });
    if (isCommon) comDividers.push(dividers[0][i]);
  }

  let result = [...comDividers];
  for (let i = 0; i < comDividers.length - 1; i++) {
    comDividers.forEach((el) => {
      if (comDividers[i] !== el) result.push(comDividers[i] * el);
    });
  }
  result.sort((a, b) => a - b);

  const sortResult = result.filter(
    (el, index, array) => el !== array[index + 1]
  );

  return sortResult;
}

// №3 7min
function range(n1, n2) {
  const arr = [];

  while (n1 <= n2) {
    arr.push(n1);
    n1 += 2;
  }

  return arr;
}

// №4 1h 50m
function timesTable(to) {
  const firstLineArr = [];

  let n = 1;
  while (n <= to) {
    firstLineArr.push(n);
    n++;
  }
  let firstStr = `   ${firstLineArr.join("  ")}`;

  const arrStr = [];
  arrStr.push(firstStr);
  for (let i = 1; i <= firstLineArr.length; i++) {
    let strArr = [];
    strArr.push(i);
    firstLineArr.forEach((el) => {
      let result = i * el;
      if (String(result).length == 1) result = "s" + result;
      strArr.push(result);
    });

    const str = strArr.join(" ");
    const newStr = str.replace(/s/g, " ");
    arrStr.push(newStr);
  }

  return arrStr.join("\n");
}
