class HashMap {
  capacity = 16;
  buckets = Array.from({ length: this.capacity }, () => null);
  loadFactor = 0.75;
  
  hash(key) { 
    let hashCode = 0;

    const primeNumber = 31;
    for(let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
}

console.log(new HashMap().hash("alo parcerio oi"));

