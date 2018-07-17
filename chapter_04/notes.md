Chapter 4 - Objects
===

Properties
---

- Almost all javascript values have properties, except `null` and
  `undefined`
- You can access a value's properties in two ways:

```js
value.x
value[x]
```

- When using square brackets, `x` is evaluated, so you can pass in an
  expression
- Property names are strings
- Dot notation only works for property names that are valid binding
  names.  For other property names, you must use square brackets:

```js
value["John Doe"]
value["2"]
```

Arrays
---

- Elements in an array are stored as properties with indexes as names

Methods
---

- Properties that hold functions

Objects
---

- Property names that aren't valid binding names must be quotes in
  object literals:

```js
{
  "foo bar": 2
}
```

- Reading a property that doesn't exist returns `undefined`

Delete
---

```js
delete anObject.foo
```

In
---

```js
foo in anObject
// => true
```

Object.keys
---

- Returns all property names


Object.assign
---

- Copes all properties from one object to another:

```js
let ObjectA;
Object.assign(objectA, { foo: "bar" });
```

Immutability
---

- String objects are immutable -- eg. concatenation returns a new
  object.
- Number objects are also immutable.

Equality
---

- Objects aren't considered equal with equality operator `==` unless
  they are referencing the same object in memory (it's not enough to
  just have the same properties)

Const
---

- When a const binding points to an object, the object can't change to a
  different one, but its properties can change

Destructuring
---

```js
function foo(bar, baz) {
  { bar, baz } // instead of { bar: bar, baz: baz }
};
```

Looping over arrays
---

```js
for (let entry of arr) {
 ...
};
```

Primatives and properties
---
Strings, number values, and boolean values are not objects.  But js
won't complain if you try to set new properties on them.

Rest syntax
---
- Same as "splat" in Ruby:
- In method signature, sucks up remaining arguments and puts them into
an array

```js
function f(a, b, ...args) {
  ...
}
```

Spread syntax
---
- In method call, "spreads out" array as arguments

```js
let arr = [ 1, 2, 3 ]
f(...arr)
```

Math namespace
---
- Has useful math-related functions

Destructuring
---
- Square brackets in method signature can pull values out of an array
  and assign them to bindings

```js
function f([a, b, c]) {
  ...
};
```

- Same for objects, but use curly braces

```js
function f({a, b, c}) {
  ...
};
```

JSON
---
```js
JSON.stringify // JS object   -> JSON string
JSON.parse     // JSON string -> JS object
```
