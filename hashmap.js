import { LinkedList, Node } from "./linked-list.js";

class HashMap {
  capacity = 16;
  buckets = Array.from({ length: this.capacity }, () => new LinkedList());
  loadFactor = 0.75;

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    let currentNode = this.buckets[index].head;
    while (currentNode !== null) {
      if (currentNode.value.key === key) {
        currentNode.value.value = value;
        return;
      }
      currentNode = currentNode.nextNode;
    }
    this.buckets[index].append({ key: key, value: value });
  }

  get(key) {
    const index = this.hash(key);

    let currentNode = this.buckets[index].head;
    while (currentNode !== null) {
      if (currentNode.value.key === key) {
        return currentNode.value.value;
      }
      currentNode = currentNode.nextNode;
    }
    return undefined;
  }

  has(key) {
    if (this.get(key) === undefined) return false;
    else return true;
  }

  remove(key) {
    const index = this.hash(key);

    let currentNode = this.buckets[index].head;
    while (currentNode !== null) {
      if (currentNode.value.key === key) {
        this.buckets[index].head = currentNode.nextNode;
        currentNode = null;
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  length() {
    let counter = 0;
    this.buckets.forEach((bucket) => {
      counter += bucket.size();
    });
    return counter;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
  }
}

const map = new HashMap();
map.set("apple", "red");
map.set("apple", "fruit");
map.set("banana", "yellow");
// console.log(map.buckets[map.hash("apple")]);
// console.log(map.remove("apple"));
// console.log(map.has("red"))
console.log(map.buckets);
map.clear();
console.log(map.buckets);
