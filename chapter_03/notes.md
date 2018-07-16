Chapter 3 - Functions
=====================

Functions with no explicit return value
---

- return `undefined`

Scope
---

- Bindings created _outside_ of any function are global
- Bindings created _inside_ of functions are local to those functions
- `Lexical scoping`: each local scope can see the scope around it (e.g.
  the containing function's scope)
- `let` and `const` bindings are local to blocks, including those in loops and
  conditionals
- `var` bindings are visible throughout the entire function on which
  they are defined, including outside of the blocks where they are
  defined


Function "definition" syntax:
---


```js
const foo = function(bar) {
  ...
};
```

Function "declaration" syntax:
---

- Has the property that it is "lifted" to the top of its scope

```js
function foo(bar) {
  ...
};
```

Arrow functions
---

```js
const square = (x) => { return x * x; };
```

..._or_...

```js
const square2 = x => x * x;
```

- When there is only one parameter, you can omit parentheses
- When body is one expression, you can omit curly brackets

Argument errors
---

- Not a thing in JS
  - Extra arguments are ignored
  - Missing arguments become `undefined`

Default arguments
---

```js
  function(foo=1) { ... };
```

Closures
---
- A function that references bindings from the surrounding local scope
  is called a _closure_.  The function saves a copy of that local
variable for its own purposes.

Pure functions
---
- Cause no side effects
- Rely on no side effects
