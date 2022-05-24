function fizzBuzz(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    let num = '';
    if (i % 3 == 0) {
      num += 'Fizz';
    } else if (i % 5 == 0) {
      num += 'Buzz';
    } else {
      num = i;
    }
    array.push(num);
  }
  return array;
}

// console.log(fizzBuzz(16));

function anagrams(wordOne, wordTwo) {
  return wordOne.split('').sort().join() === wordTwo.split('').sort().join();
}

// console.log(anagrams('superintended', 'unpredestined'));

function oddishOrEvenish(num) {
  const sum = num
    .toString()
    .split('')
    .reduce((total, n) => {
      total += Number(n);
      return total;
    }, 0);

  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log(oddishOrEvenish(121));
//pushshshs
