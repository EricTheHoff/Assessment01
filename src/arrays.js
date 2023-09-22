// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let newNumbers = []

  for(const number of numbers) {
    if(number > 10) {
      newNumbers.push(number)
    }
  }
  return newNumbers
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let bWordsArray = []

  for(const onlyB of words) {
    if(onlyB.startsWith(`b`)) {
      bWordsArray.push(onlyB)
    } else if(onlyB.startsWith(`B`)) {
      bWordsArray.push(onlyB)
    }
  }
  return bWordsArray
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {

  for(const addItem of additionalItems) {
    originalArray.push(addItem)
  }
  return originalArray
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let itemLength = []

  for(const individItem of items) {
    if(individItem.length === length) {
      itemLength.push(individItem)
    }
  }
  return itemLength
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let evenArray = []

  for(let i = 0; i < items.length; i++) {
    if([i] % 2 === 0) {
      evenArray.push(items[i])
    }
  }
  return evenArray
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let indexArray = []

  for(let i = 0; i < words.length; i++) {
    if(words[i].startsWith(letter)){
      indexArray.push(i)
    }
  }
  return indexArray
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  function compareNumb(a, b){
  return a - b
}
  let smallArray = []

  for(let i = 0; i < n; i++) {
    items.sort(compareNumb)
    smallArray.unshift(items[i])
  }
  return smallArray
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  let indexVal = items.indexOf(value)
  if(indexVal !== -1) {
    return indexVal
  } else return
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  let array = []
  for(let i = start; i <= stop; i++){
    array.push(i)
  }
  return array
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
