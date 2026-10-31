# HashMap

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white)

A hash map built from scratch with JavaScript classes and run with Node.js. This project is part of [The Odin Project's](https://www.theodinproject.com/) JavaScript curriculum, focused on how hash maps store key-value pairs: a hash function turns each key into a bucket index, and each bucket holds every entry that lands there.

## Features

- **Buckets as Linked Lists:** The map starts with 16 buckets, each one its own empty `LinkedList` (reused from my [Linked Lists](https://github.com/LucasAzevedoTheDev/linked-lists) project). Every node stores an entry as `{ key, value }`.
- **`hash(key)`:** Turns a string key into a bucket index between `0` and `capacity - 1`, using a prime multiplier and applying the modulo on every iteration so long keys never exceed the safe integer limit.
- **`set(key, value)`:** Overwrites the value if the key already exists; otherwise appends a new entry to the bucket. Different keys in the same bucket (collisions) are kept as separate nodes.
- **Automatic Growth:** When the number of entries exceeds `capacity × loadFactor` (0.75), the map doubles its capacity and re-inserts every entry, since each key's bucket index changes with the new capacity.
- **`get(key)` / `has(key)`:** Return a key's value (or `undefined`), or whether the key is in the map.
- **`remove(key)`:** Deletes an entry from anywhere in its bucket (head, middle or tail) and returns `true`, or `false` if the key isn't there.
- **`length()` / `clear()`:** Count the stored keys, or reset the map to empty buckets.
- **`keys()` / `values()` / `entries()`:** Return every key, every value, or every `[key, value]` pair as arrays.
- **Bounds Check:** Every bucket access throws an error if an index ever falls outside the bucket array.

## Key Learnings

- **What a Bucket Is:** Understanding that capacity is the number of buckets, the hash code *is* the bucket index, and a bucket has to hold more than one entry because collisions are unavoidable.
- **Building Arrays of Objects:** Using `Array.from({ length }, () => new LinkedList())` so each bucket gets its own list, instead of `fill()`, which would put the same list in every slot.
- **Class Field Order:** Fields are initialized top to bottom, so `capacity` has to be declared before the `buckets` field that reads `this.capacity`.
- **Operator Precedence:** `%` binds tighter than `+`, so the whole hash expression needed parentheses before the modulo.
- **Storing Keys With Values:** A node that only holds the value can't tell colliding keys apart, so each node stores a `{ key, value }` object, and comparisons read `node.value.key`. This also meant my old `contains` couldn't be reused, since it compared a string against an object.
- **`return` vs `break`:** After overwriting an existing key, `break` only leaves the loop and still runs the `append` below it; `return` exits the whole method.
- **Load Factor and Resizing:** Growing by saving `entries()`, doubling the capacity, rebuilding empty buckets and calling `set` for each saved entry. A flipped comparison in the growth check made the map grow on every insert, which turned into an infinite resize that froze Node.
- **Removing From a Linked List:** Walking with a `previousNode` one step behind `currentNode`, so removing a middle node means pointing the previous node past it. Only replacing the head (my first version) silently deleted the nodes before the match.
- **Testing Collisions on Purpose:** The official test passed with that `remove` bug still in place, because after growth every removed key happened to be a bucket's head. Finding keys that share a bucket (`dog`, `lion` and `sun` at capacity 16) exposed it.
- **Reassigning Isn't Deleting:** Setting a local variable like `currentNode = null` changes the variable, not the list. Clearing the map is just giving `this.buckets` fresh empty lists.
- **Inspecting Nested Objects:** `console.log` collapses deep objects into `[Node]`; `console.dir(obj, { depth: null })` shows the whole structure.

## How to Run Locally

```bash
git clone https://github.com/LucasAzevedoTheDev/hashmap.git
cd hashmap
node test.js
```

---
Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)
