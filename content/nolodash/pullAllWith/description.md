In general, it's recommended to avoid mutating the original array, but if you must, the following `filterInPlace()` helper can be used to achieve the desired result.

```javascript
function filterInPlace(array, predicate) {
  let destIndex = 0;
  for (let srcIndex = 0; srcIndex < array.length; ++srcIndex) {
    if (!predicate(array[srcIndex], srcIndex)) {
      continue;
    }
    array[destIndex] = array[srcIndex]
    destIndex++;
  }

  array.splice(destIndex, array.length - destIndex);
}

function pullAllWith(array, values, comparator) {
  filterInPlace(array, x => !values.some(y => comparator(x, y)));
}
```
