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
    this.buckets[index].append({key: key, value: value});
  }
}

const map = new HashMap();
map.set("apple", "red");
console.log(map.buckets[map.hash("apple")]);
