Chapter 1 - Values, Types, and Operators
===

Operator precedence in ascending order
---
- `||`
- `&&`
- comparison operators (e.g. `>` `==`)
- math operators
  - modulo (`%`) has the same `*` `/`

Special number values
---
- `Infinity` and `-Infinity`
- `NaN`
```js
NaN == NaN
// => false
```

String literals written with backticks
---
```js
`Can contain:
  - newlines
  - ${interpolatedVariables}`
```

Typeof
---
```js
typeof(1)
// => 'number'
```

Number of operator arguments
---
- Unary: `console.log(foo)`
- Binary: `1 + 1`
- Ternary: `true ? 1 : 2`

Null and undefined
---
Mostly treat `undefined` and `null` as interchangeable.

```js
null      == undefined // => true
null      == null      // => true
undefined == undefined // => true
```

'Falsey' values
---

```js
0   == false // => true
NaN == false // => true
''  == false // => true
```

This is sometimes useful (e.g. default arguments), but it's usually best
to use `===` in comparisons to avoid this weirdness.

```js
console.log(null || "user"); // prints 'user'
console.log(''   || 'foo');  // prints 'foo'
0 === false;                 // => false
```

Type coercion
---
Javascript performs a lot of automatic type coercion.

```js
"2" + 3 // => '23'
```
