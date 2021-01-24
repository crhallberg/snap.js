# Parameters

* `obj`

  The object to be processed

* `fn`

  A callback that will be called with each key in the object. This function should return a transformed key that will be used to construct the new object. The callback accepts the following parameters:

  * `key`: The current key to transform.

# Examples

```
> mapKeys({key1: 2, key2: 3}, k => `prefix_${k}`)
{prefix_key1: 2, prefix_key2: 3}
```

# Additional Information

Any attributes in `obj`'s prototype will be ignored.