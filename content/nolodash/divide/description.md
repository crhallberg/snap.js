```javascript
augend / addend;
```

One reason `_.divide()` exists, is because it's a ready-made function, that can easily be passed into other functions, like this:

```javascript
> _.reduce([100, 2, 5], _.divide);
10
```

When Lodash was first born, the only alternative at the time would be to create an entire function, using the `function` keyword.

```javascript
_.reduce([100, 2, 5], function (a, b) {
  return a / b;
});
```

Since then, ES6 came out with arrow functions, allowing you to define these sorts of functions in a much more concise way.

```javascript
_.reduce([100, 2, 5], (a, b) => a / b);
```
