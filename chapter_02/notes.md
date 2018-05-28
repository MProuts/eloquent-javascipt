Chapter 2 - Program Structure
===

Semicolons
---
Sometimes the semicolon can be omitted, but it's safer to just always
use it at the end of statements.

Bindings
---
- `const`
- `let`
- `var`

Empty bindings return `undefined`.

You can declare multiple bindings at once separated by a comma.

```js
let foo = 1, bar = 2, baz = 3;
```

Binding names:
- Can't start with a digit
- Can't include special characters except `'$'` and `'_'`
- Use `camelCase` for multi-word binding names
- `Capitalize` constructor function names (e.g. `Number()`)


One-line `if` without braces
---

```js
if (1 > 2) console.log("Wawwwy!");
```

Number namespace
---
The `Number` namespace contains a bunch of helpful math-related
functions.

```js
Number.isNaN("foo"); // => true
```

Else if
---
It's two words:

```js
if (foo == bar) {
} else if {
  //...
} else {
  //...
}
```

Do loop
---

A `do` loop executes it's body once before checking it's termination
condition.

For loop
---
```js
for (let n = 0; n < 10; n++) {
  // ...
}
```

- `break` breaks out of a loop completely.
- `continue` skips to the next iteration.

Operator/assignment shorthand
---
These are all things:
```js
counter++;
counter--;
counter+=5;
counter-=5;
counter*=100;
```

Case statements
---
There's a wonky `switch` syntax inherited from Java, but often it's
clean to use `if`/`else if` for dispatch instead:

```js
if (x == 'value') action1();
else if (x == 'value2') action2();
else if (x == 'value3') action3();
else defaultAction();
```

Comments
---

```js
// comment
/*
  multi-
  line
  comment
*/
```

Standard bindings
---
Javascript puts a bunch of useful standard bindings into your
environment for you.  E.g. for interacting with the browser.
