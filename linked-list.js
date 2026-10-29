class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }
  size() {
    let counter = 0;
    if (this.head === null) {
      return counter;
    }
    let currentNode = this.head;
    counter = 1;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      counter += 1;
    }
    return counter;
  }
  firstNode() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.value;
  }
  tail() {
    if (this.head === null) {
      return undefined;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }
  at(index) {
    if (this.head === null) {
      return undefined;
    }

    let currentNode = this.head;
    if (index === 0) {
      return currentNode.value;
    }

    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.nextNode;
      counter += 1;
      if (currentNode === null) {
        return undefined;
      }
    }
    return currentNode.value;
  }
  pop() {
    if (this.head === null) {
      return undefined;
    }
    const first = this.head;
    this.head = this.head.nextNode;
    return first.value;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  findIndex(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index += 1;
    }
    return -1;
  }
  toString() {
    let string = "";
    let currentNode = this.head;

    if (this.head === null) {
      return string;
    }
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return (string += "null");
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList, Node };