# Essay Questions

## 1. What is the difference between forEach and for...of? When would you use each?

`forEach` is used with arrays. It goes through every item and runs a function on it. It cannot use `break` or `continue`, and it does not wait for `await`.
`for...of` is a normal loop. It works with arrays and other things like strings and Maps. We can use `break`, `continue`, and `await` inside it.
I use `forEach` for simple tasks, like printing items. I use `for...of` when I need more control over the loop.



## 2. What is hoisting and what is the Temporal Dead Zone (TDZ)?

Hoisting means JavaScript prepares variable and function declarations before running the code.
- `var` can be used before its declaration, but its value will be `undefined`.
- Function declarations can be called before they are written.
- `let` and `const` are also hoisted, but we cannot use them before their declaration.

The TDZ is the time before a `let` or `const` variable is declared. If we try to use it during this time, we get a `ReferenceError`.

```javascript
console.log(a); 
var a = 5;

console.log(b); 
let b = 10;

sayHi(); // works
function sayHi() {
  console.log("Hi");
}
```

## 3. What are the main differences between == and ===?

`==` compares two values after JavaScript may change their types.
`===` compares both the value and the type without changing them.
I usually use `===` because it gives more accurate results and avoids unexpected comparisons.

## 4. Explain how try-catch works and why it is important in async operations.

`try` is used to run code that might cause an error.
If an error happens, JavaScript moves to the `catch` block, where we can handle the error.
`finally` is optional. It runs at the end, whether an error happens or not.
In async functions, `try-catch` helps us handle errors when using `await`. For example, if a Promise fails, `catch` can handle the error instead of leaving it unhandled.


## 5. What is the difference between type conversion and coercion?

Both mean changing a value from one type to another.

The difference is:

- **Type conversion:** We change the type ourselves using functions like `Number()` or `String()`.
- **Type coercion:** JavaScript changes the type automatically.

