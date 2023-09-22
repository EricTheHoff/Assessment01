# Unit 1 Assessment: Written Questions

> To select an answer for the multiple choice questions, put an `x` inside the square brackets (`[ ]`) like this:
> ```md
> - [ ] This is the answer!
> ```
>
> **Pro tip:** You might find it easier to read the assessment through VS Code's Markdown Preview. To view the preview for this document, open the Command Palette (<kbd>Cmd+Shift-P</kbd> or <kbd>Ctrl+Shift-P</kbd>) and run `Markdown: Open Preview to the Side`.

## A. Multiple choice questions

### A.1. Which statement is true?

Which statement is true about JavaScript?

- [ ] **A.** JavaScript is case insensitive, so `true` is the same as `True`.
- [X] **B.** JavaScript ignores whitespace characters like spaces and newline characters.
- [ ] **C.** JavaScript requires you to end all statements with a semicolon (`;`).
- [ ] **D.** All of the above are true.
- [ ] **E.** None of the above are true.

### A.2. Turn `sum` to `2`.

Assume you've initialized a variable, `sum`, like so:

```js
let sum = 1;
```

Which of these lines of code will cause `sum` to have a value of `2`? You can select more than one
answer.

- [ ] **A.** `sum++`
- [ ] **B.** `sum += 1`
- [X] **C.** `sum = sum + 1`
- [ ] **D.** All of the above
- [ ] **E.** Some of the above

### A.3. What's the output?

What's the output of the program below?

```js
const result = 1 < 100 || 'hello' === 'hi';
console.log(result);
```

- [X] **A.** `true`
- [ ] **B.** `false`
- [ ] **C.** `undefined`
- [ ] **D.** N/A because the code has an error

### A.4. What's the output?

What's the output of the program below?

```js
const word = '';
if (word) {
  console.log('yay!');
} else {
  console.log('no :(');
}
```

- [ ] **A.** `yay!`
- [X] **B.** `no :(`
- [ ] **C.** An empty line
- [ ] **D.** N/A because the code has an error

### A.5. Fill in the blank

The code below is incomplete. There's a blank space inside the `for` loop:

```js
const fruits = ['apple', 'berry', 'cherry'];
for (______) {
  console.log(fruit);
}
```

Fill in the blank---select the code that will produce the following output:

```text
apple
berry
cherry
```

- [ ] **A.** `const fruit in fruits`
- [X] **B.** `const fruit of fruits`
- [ ] **C.** `let fruit = 0; fruit < fruits.length; fruit++`
- [ ] **D.** None of the above

### A.6. What will happen?

What will happen when we run the program below? If there's more than one option that seems
correct, pick the one you think is **most accurate**.

```js
function makeWordArray(phrase) {
  return phrase.split(' ');
}
```

- [ ] **A.** Nothing happens because the program errors out.
- [X] **B.** It defines a function called `makeWordArray` and converts `phrase` into an array of words.
- [ ] **C.** It defines a function called `makeWordArray` and outputs a word array.
- [ ] **D.** It defines a function called `makeWordArray` but nothing else happens.

### A.7. Identify the error

Which statement best describes the error below?

```js
console.log'hi';
// expected output:
// hi
```

- [X] **A.** The code causes an error because there should be parentheses around `'hi'`.
- [ ] **B.** The code causes an error because `console.log` isn't a function.
- [ ] **C.** The code causes an error because the code will run but it won't output anything.
- [ ] **D.** There is no error; the code generates the expected output.

### A.8. Identify the error

Which statement best describes the error below?

```js
const fruits = ['apple', 'berry', 'cherry'];
console.log(fruits[fruits.indexOf('apple')]);
// expected output:
// apple
```

- [X] **A.** The code causes an error because `fruits[fruits.indexOf('apple')]` isn't valid
  JavaScript syntax.
- [ ] **B.** The code causes an error because `fruits.indexOf('apple')` doesn't return a valid
  index number.
- [ ] **C.** The code causes an error because it outputs `0` instead of the expected output.
- [ ] **D.** There is no error; the code generates the expected output.

### A.9. Identify the error

Which statement best describes the error below?

```js
const words = ['js', 'html', 'css'];
for (const w of words) {
  console.log(words.toUpperCase());
}
// expected output:
// JS
// HTML
// CSS
```

- [ ] **A.** The code causes an error because `w` needs to be a `let` variable.
- [X] **B.** The code causes an error because `words` is an array and `toUpperCase()` isn't a
  valid array function.
- [ ] **C.** The code causes an error because it will output `['JS', 'HTML', 'CSS']` three times.
- [ ] **D.** There is no error; the code generates the expected output.

### A.10. Identify the error

Which statement best describes the error below?

```js
const nums = [500, 200, 440];
const numStrings = [];
for (let i = 0; i <= nums.length; i++) {
  numStrings.push(nums[i].toString());
}
console.log(numStrings);
// expected output:
// ['500', '200', '440']
```

- [ ] **A.** The code causes an error because `numStrings` needs to be a `let` variable.
- [X] **B.** The code causes an error because `i <= nums.length` should be `i < nums.length`
- [ ] **C.** The code causes an error because `i++` isn't valid JavaScript syntax.
- [ ] **D.** There is no error; the code generates the expected output.

### A.11. Identify the error

Which statement best describes the error below?

```js
function outputArgs(a, b, c) {
  if (a) {
    console.log(a);
  }
  if (b) {
    console.log(b);
  }
  if (c) {
    console.log(c);
  }
}
outputArgs('hi', 'bye');
// expected output:
// hi
// bye
```

- [ ] **A.** The code causes an error because `outputArgs` takes in three arguments but it's being
  called with just two.
- [ ] **B.** The code causes an error because it will output `hi`, `bye`, and `undefined` instead
  of the expected output.
- [ ] **C.** The code causes an error because the `a`, `b`, and `c` variables haven't been
  initialized.
- [X] **D.** There is no error; the code generates the expected output.

## B. Free response

### B.1. Answer the questions below in your own words.

**_What is the purpose of functions?_**

```
Functions are named blocks of code that house even more code within them. When the function is invoked, it executes it's code to perform the needed action. Functions help to keep code organized and effecient so you don't need to write the same code over and over again. It is best to keep their uses as specific as possible.
```

**_What is the difference between `console.log` and `return`?_**

```
`console.log()` outupts data to the developer console. This is useful for debugging as it can tell you where code is failing, depending on the placement. `console.log()` will not output anything to the end-user; only to the console.

`return` is used to provide the results of a function. It also serves to end the function. Functions often contain neutral variables with no data; the variables receive data after the function executes, but only if the function has `return` to provide the results.
```

**_What's the difference between defining and calling a function?_**

```
Defining a function is done when the function is initially created. This is what tells the JavaScript file what it is and what it's supposed to do.
(e.g.: function myFunction(A, B) -- with this line, I've defined an empty function called myFunction, along with two parameters; A and B.)

Calling (aka invoking) is when the function is called to perform it's actions. This includes passing arguments to its parameters (if any are needed). With the example above, I could invoke myFunction with the following:

console.log(myFunction(`Yes`,`No`))

With the above line, I am invoking my function and will have it output it's return to my console log. I have provided the arguments `Yes` and `No`.
```

### B.2. Describe these data types.

Write a short description of the following data types:

**_String_**

```
Any data contained within string identifiers (``,"", and '').

`This whole sentence would be considered a string (even though it has various symbols and numbers like 4 and 7!)`
```

**_Number_**

```
Numbers refer to integers and floats within JavaScript. Integers are whole numbers, whereas floats refer to non-whole numbers (like decimals).
```

**_Boolean_**

```
Booleans refer to data with only two possible outcomes: true or false. Examples could include:
10 > 5; //true
array.includes(`Boolean?`) //false
```

**_Array_**

```
An array is a data type that houses multiple data elements. Arrays can contain strings, numbers, a combination of both, or even more arrays. Arrays track the index positioning of their elements, starting at [0]. Arrays will always be wrapped in brackets.
(e.g. const array = [`A`,`B`,`C`,`D`])
```

### B.3. Trace the value of `x`

Consider the following program:

```js
let x = 5;
let y = 0;
while (y < 3) {
  x = x + 5;
  y = y + 1;
  console.log(x);
}
```

The lines below represent the value of `y` and `x` at the end of each iteration of the `while` loop.
Given the values for `y`, replace the `??` with the values for `x`. The first line has been
completed for you.

```
Initial values: y = 0, x = 5
1:              y = 1, x = 10
2:              y = 2, x = 15
3:              y = 3, x = 20
```
